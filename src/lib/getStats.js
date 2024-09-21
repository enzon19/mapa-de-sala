import { DateTime } from "luxon";
import { supabase } from "$lib/supabaseClient";

export function countStudentsAttendance (layout) {
  const students = layout.flat();
  const studentsAttendance = students.filter(student => student.id != "clssrmmp_space" && student.id != "clssrmmp_empty");
  return studentsAttendance.length;
}

export function countChairs(layout) {
  const students = layout.flat();
  const chairs = students.filter(student => student.id != "clssrmmp_space");
  return chairs.length;
}

export function countSpaces(layout) {
  const students = layout.flat();
  const spaces = students.filter(student => student.id == "clssrmmp_space");
  return spaces.length;
}

export function countEmptyChairs(layout) {
  const students = layout.flat();
  const emptyChairs = students.filter(student => student.id == "clssrmmp_empty");
  return emptyChairs.length;
}

export function getAttendance(layout, studentID) {
  const students = layout.flat();
  const attendance = students.includes(studentID);
  return attendance;
}

export function getAttendancesAndAbsences(allClassroomMapData, student) {
  const allDays = allClassroomMapData.map(data => data.day);
	let attendances = [];
	
	for (const classroomMapData of allClassroomMapData) {
    const layout = classroomMapData.columns;
		if (getAttendance(layout, student?.id)) attendances.push(classroomMapData.day);
	}
  
  const absences = allDays.filter(date => !attendances.includes(date));

  return {attendances, absences};
}

export function countAttendancesAndAbsences (attendances, absences) {
  const attendancesAmount = attendances.length;
	const absencesAmount = absences.length;
  const numberOfDays = attendancesAmount + absencesAmount;
  const attendancesPercentage = Math.trunc((attendancesAmount / numberOfDays) * 100);
  const absencesPercentage = Math.trunc((absencesAmount / numberOfDays) * 100);

  return {
    "attendances": {
      "number": attendancesAmount,
      "percentage": attendancesPercentage
    },
    "absences": {
      "number": absencesAmount,
      "percentage": absencesPercentage
    }
  };
}

export function getAttendancesAndAbsencesFixedAndWithStudentData(allClassroomMapData, student, includeAllData = false, currentYear = 2023) {
  let { attendances, absences } = getAttendancesAndAbsences(allClassroomMapData, student);
// console.log(student.name, student.left === currentYear)
  const firstAttendance = attendances[0];
  const firstAttendanceAsDateTime = DateTime.fromISO(firstAttendance);
  const lastAttendance = attendances.at(-1);
  const lastAttendanceAsDateTime = DateTime.fromISO(lastAttendance);
  
  if (student.left === currentYear) absences = absences.filter(date => DateTime.fromISO(date) <= lastAttendanceAsDateTime);
  if (student.late === currentYear) absences = absences.filter(date => DateTime.fromISO(date) >= firstAttendanceAsDateTime);

  if (includeAllData) return {student, attendances, absences};
  return {...student, ...countAttendancesAndAbsences(attendances, absences)};
}

export async function getPeopleAttendancesAndAbsencesOnDay(data, studentsData, date) {
  if (data.columns.length === 0 || !studentsData) return;

  const layout = data.columns;
  const studentsOnThatDay = layout.flat().filter(e => !['clssrmmp_space','clssrmmp_empty'].includes(e.id)).map(e => e.id);
  const year = data.day.year;
  const availableStudents = studentsData.filter(e => e?.year?.includes(year));
  
  let absences = availableStudents.filter(e => !studentsOnThatDay.includes(e.id));
  let attendances = availableStudents.filter(e => studentsOnThatDay.includes(e.id));
  
  if (absences.length > 0) { // verificar se não há pessoas que já saíram
    const {data:allClassroomMapData} = await supabase.from('classroomMap').select('*').order('day');
    for (const student of absences) {
      let { attendances: studentAttendances } = getAttendancesAndAbsences(allClassroomMapData, student);
      
      const firstAttendance = studentAttendances[0];
      const firstAttendanceAsDateTime = DateTime.fromISO(firstAttendance);
      const lastAttendance = studentAttendances.at(-1);
      const lastAttendanceAsDateTime = DateTime.fromISO(lastAttendance);

      if (student.left === year && DateTime.fromISO(date) >= lastAttendanceAsDateTime) absences = absences.filter(e => e.id !== student.id);
      if (student.late === year && DateTime.fromISO(date) <= firstAttendanceAsDateTime) absences = absences.filter(e => e.id !== student.id);
    }
  }

  return {absences, attendances};
}

export function getPosition(layout, studentID, reverseOrder = false, fillSpaces) {
  for (let i = 0; i < layout.length; i++) {
    let currentColumn = fillSpaces > 0 ? new Array(fillSpaces - layout[i].length).fill('clssrmmp_space').concat(layout[i]) : layout[i].filter(student => student !== 'clssrmmp_space');
    if (reverseOrder) currentColumn.reverse();
    const deskIndex = currentColumn.indexOf(studentID);
    if (deskIndex !== -1) {
      return [i, deskIndex];
    }
  }
  return [-1, -1]; // Element not found
}

export function getPositionDayByDay(allClassroomMapData, studentID, reverseOrder = false, fillSpaces) {
  return allClassroomMapData.map(classroomMapData => {
    const layout = classroomMapData.columns;
    return {
      day: classroomMapData.day,
      tags: classroomMapData.tags,
      position: getPosition(layout, studentID, reverseOrder, fillSpaces)
    }
  });
}

export function generateFrequencyOfPosition(allClassroomMapData, studentID, reverseOrder = false, fillSpaces) {
  const positionDayByDay = getPositionDayByDay(allClassroomMapData, studentID, reverseOrder, fillSpaces);
  const daysAccordingPosition = groupByProperty(positionDayByDay, 'position');
  return Object.entries(daysAccordingPosition).map(([position, days]) => ({
    position: JSON.parse(position),
    frequency: days.length
  }));
}

export function generateRankedGroupedPositionHumanReadable(allClassroomMapData, studentID, reverseChairOrder = false, sort) {
  const positionDayByDay = getPositionDayByDay(allClassroomMapData, studentID, reverseChairOrder);
  const daysAccordingPosition = groupByProperty(positionDayByDay, 'position', true);
  
  const data = Object.entries(daysAccordingPosition).map(([position, days]) => ({
    position: `${position} (${days.length} ${days.length === 1 ? 'dia' : 'dias'})`,
    days
  }));

  let dataSorted = data;
  if (sort.type === 'days') {
    dataSorted = dataSorted.sort((a, b) => b.days.length - a.days.length);
  } else if (sort.type === 'desks') {
    dataSorted = dataSorted.sort((a, b) => b.days[0].position[1] - a.days[0].position[1]);
  } else if (sort.type === 'rows') {
    dataSorted = dataSorted.sort((a, b) => b.days[0].position[1] - a.days[0].position[1]).sort((a, b) => b.days[0].position[0] - a.days[0].position[0]);
  }
  if (sort.direction === 'increscent') dataSorted.reverse();
  return dataSorted;
}

export function generateDatasetsOfStudentsAttendanceAndChairs(allClassroomMapData) {
  let dataset = [
    {
      label: 'Alunos',
      data: [],
      borderColor: ['#AD5934'],
      backgroundColor: ['#AD5934']
    },
    {
      label: 'Cadeiras',
      data: [],
      borderColor: ['#2B77AD'],
      backgroundColor: ['#2B77AD']
    }
  ];

  for (const data of allClassroomMapData) {
    const layout = data.columns.map(column => column.map(id => ({id})));
    const dayFormatted = DateTime.fromISO(data.day).toFormat('dd/MM');

    dataset[0].data.push({x: dayFormatted, y: countStudentsAttendance(layout)}); // alunos
    dataset[1].data.push({x: dayFormatted, y: countChairs(layout)}); // cadeiras
  }

  return dataset;
}

export function generateDatasetsOfSpacesAndEmptyChairs(allClassroomMapData) {
  let dataset = [
    {
      label: 'Vazias',
      data: [],
      borderColor: ['#ad2e2b'],
      backgroundColor: ['#ad2e2b']
    },
    {
      label: 'Buracos',
      data: [],
      borderColor: ['#6b44bc'],
      backgroundColor: ['#6b44bc']
    }
  ];

  for (const data of allClassroomMapData) {
    const layout = data.columns.map(column => column.map(id => ({id})));
    const dayFormatted = DateTime.fromISO(data.day).toFormat('dd/MM');

    dataset[0].data.push({x: dayFormatted, y: countEmptyChairs(layout)}); // vazias
    dataset[1].data.push({x: dayFormatted, y: countSpaces(layout)}); // buracos
  }

  return dataset;
}

// essa função foi feita com ajuda do meu mano ChatGPT ;)
export function generatePositionTimeline(allClassroomMapData, studentID, reverseOrder = false, fillSpaces, sort = {}) {
  const data = getPositionDayByDay(allClassroomMapData, studentID, reverseOrder, fillSpaces).filter(d => !d.position.includes(-1));
  let timeline = [];
  let currentStartDate = data[0].day;
  let currentEndDate = data[0].day;
  let currentPosition = data[0].position;

  for (let i = 1; i < data.length; i++) {
    const currentDate = data[i].day;
    const currentPositionArray = data[i].position;

    if (JSON.stringify(currentPosition) === JSON.stringify(currentPositionArray)) {
      // Dates have the same position, extend the current timeline
      currentEndDate = currentDate;
    } else {
      // Dates have different positions, add the current timeline to the result
      timeline.push(data.filter(({day}) => DateTime.fromISO(day) >= DateTime.fromISO(currentStartDate) && DateTime.fromISO(day) <= DateTime.fromISO(currentEndDate)))
      // timeline.push({ startDate: currentStartDate, endDate: currentEndDate, position: currentPosition });

      // Start a new timeline
      currentStartDate = currentDate;
      currentEndDate = currentDate;
      currentPosition = currentPositionArray;
    }
  }
  // Add the last timeline to the result
  timeline.push(data.filter(({day}) => DateTime.fromISO(day) >= DateTime.fromISO(currentStartDate) && DateTime.fromISO(day) <= DateTime.fromISO(currentEndDate)))
  // timeline.push({ startDate: currentStartDate, endDate: currentEndDate, position: currentPosition });

  if (sort.type === 'days') {
    timeline = timeline.sort((a, b) => a.length - b.length);
  } else if (sort.type === 'desks') {
    timeline = timeline.sort((a, b) => a[0].position[1] - b[0].position[1]);
  } else if (sort.type === 'rows') {
    timeline = timeline.sort((a, b) => a[0].position[0] - b[0].position[0]);
  }
  if (sort.direction === 'decrescent') timeline.reverse();

  return timeline;
}

export function generateAbsencesPerDay(allClassroomMapData, student, currentYear, fullObject = false) {
  const {absences} = getAttendancesAndAbsencesFixedAndWithStudentData(allClassroomMapData, student, true, currentYear);
  const daysAccordingDayOfWeek = groupByProperty(absences.map(day => { 
    const dayAsDateTime = DateTime.fromISO(day);
    return { dayOfWeek: dayAsDateTime.weekdayLong, day, weekday: dayAsDateTime.weekday };
  }), 'dayOfWeek');
  
  return !fullObject ? daysAccordingDayOfWeek : {
    '"segunda-feira"': [],
    '"terça-feira"': [],
    '"quarta-feira"': [],
    '"quinta-feira"': [],
    '"sexta-feira"': [],
    '"sábado"': [], 
    ...daysAccordingDayOfWeek
  };
}

export function generateAbsencesPerDayHumanReadable(allClassroomMapData, student, sort, currentYear) {
  const daysAccordingDayOfWeek = generateAbsencesPerDay(allClassroomMapData, student, currentYear);

  console.log(daysAccordingDayOfWeek)
  const data = Object.entries(daysAccordingDayOfWeek).map(([dayOfWeek, days]) => ({
    dayOfWeek: `${dayOfWeek.replace(/"/g, '')} (${days.length} ${days.length === 1 ? 'dia' : 'dias'})`,
    days: days.map(({day}) => ({day})),
    weekday: days[0].weekday
  }));
  let dataSorted = data;
  if (sort.type === 'days') {
    dataSorted = dataSorted.sort((a, b) => b.days.length - a.days.length);
  } else if (sort.type === 'weekday') {
    dataSorted = dataSorted.sort((a, b) => b.weekday - a.weekday);
  }
  if (sort.direction === 'increscent') dataSorted.reverse();
  return dataSorted;
}

export function generateDatasetsOfAbsencesPerDay(allClassroomMapData, studentsData, currentYear) {
  let dataset = {
    labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    datasets: [{
      label: 'Faltas',
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: [
        '#ad2e2b',
        '#6b44bc',
        '#AD5934',
        '#2B77AD',
        '#378F4A',
        '#AD9F3F'
      ]
    }]
  }

  for (const data of studentsData) {
    for (const [weekday, days] of Object.entries(generateAbsencesPerDay(allClassroomMapData, data, currentYear))) {
      const daysIndexes = {
        '"segunda-feira"': 0,
        '"terça-feira"': 1,
        '"quarta-feira"': 2,
        '"quinta-feira"': 3,
        '"sexta-feira"': 4,
        '"sábado"': 5
      };
      const currentDayIndex = daysIndexes[weekday];
      dataset.datasets[0].data[currentDayIndex] += days.length;
    }
  }

  return dataset;
}

export function generateSubjectsPerDayHumanReadable(allClassroomMapData, student, sort, currentYear, simulate) {
  const daysAccordingDayOfWeek = generateAbsencesPerDay(allClassroomMapData, student, currentYear, true);

  const calendar = {
    2024: {
      '"segunda-feira"': ['Inglês', 'Matemática 2', 'Química 1', 'Química 1', 'Geografia', 'História 1'],
      '"terça-feira"': ['História 1', 'Física 1', 'Português', 'Sociologia', 'Matemática 1', 'História 2'],
      '"quarta-feira"': ['Física 1', 'Física 2', 'Filosofia', 'Português', 'Redação', 'Geografia', 'Biologia 2'],
      '"quinta-feira"': ['Biologia 1', 'Química 2', 'Química 2', 'Biologia 1', 'Educação Física', 'Literatura'],
      '"sexta-feira"': ['Biologia 2', 'Matemática 1', 'Física 2', 'Matemática 1', 'Redação', 'Matemática 2'],
    }
  }
  const classesPerSubject = {
    "Biologia 1": 74,
    "Biologia 2": 78,
    "Educação Física": 37,
    "Filosofia": 40,
    "Física 1": 79,
    "Física 2": 78,
    "Geografia": 78,
    "História 1": 77,
    "História 2": 39,
    "Inglês": 38,
    "Literatura": 37,
    "Matemática 1": 115,
    "Matemática 2": 76,
    "Português": 79,
    "Química 1": 76,
    "Química 2": 74,
    "Redação": 78,
    "Sociologia": 39
  };
  // const classes = {
  //   "segunda-feira": 38,
  //   "terça-feira": 39,
  //   "quarta-feira": 40,
  //   "quinta-feira": 37,
  //   "sexta-feira": 38,
  // }

  //   for (const [dayOfWeek, days] of Object.entries(daysAccordingDayOfWeek)) {
  //     // Get the subjects corresponding to the day in the calendar
  //     const subjectsOfTheDay = calendar['2024'][dayOfWeek];
  //     // para cada matéria, vou adicionar os dias com base na lista de dias da semana
  //     for (const subject of subjectsOfTheDay) {
  //       minimumClassesPerSubject[subject] += classes[dayOfWeek.replace(/"/g, '')]
  //     }
  //   }
  // console.log(minimumClassesPerSubject)

  const absencesPerSubject = {};

  for (const [dayOfWeek, days] of Object.entries(daysAccordingDayOfWeek)) {
    // Get the subjects corresponding to the day in the calendar
    const subjectsOfTheDay = calendar['2024'][dayOfWeek];
    if (subjectsOfTheDay) {
      // para cada matéria, vou adicionar os dias com base na lista de dias da semana
      for (const subject of subjectsOfTheDay) {
        if (!absencesPerSubject[subject]) absencesPerSubject[subject] = [];
        absencesPerSubject[subject].push(...days);
        
        const dayOfWeekSimulateNumber = simulate[dayOfWeek];
        if (dayOfWeekSimulateNumber > 0) {
          const today = DateTime.now().setZone('America/Sao_Paulo');
          const todayDayAsObject = {"dayOfWeek": today.weekdayLong, "day": today.toFormat('yyyy-MM-dd'), "weekday": today.weekday};
          absencesPerSubject[subject].push(...Array(dayOfWeekSimulateNumber).fill(todayDayAsObject))
        } else if (dayOfWeekSimulateNumber < 0) {
          absencesPerSubject[subject].splice(dayOfWeekSimulateNumber)
        }
      }
    }
  }

  const data = Object.entries(absencesPerSubject).map(([subject, days]) => {
    const subjectName = subject.replace(/"/g, '');
    const percentage = days.length/classesPerSubject[subject];
    return {
      subject: `${subjectName}: ${days.length} ${days.length === 1 ? 'aula' : 'aulas'} (${Math.trunc(percentage * 100)}%)`,
      days: days.map(({day}) => ({day})),
      percentage
    };
  });

  let dataSorted = data;
  if (sort.type === 'days') {
    dataSorted = dataSorted.sort((a, b) => b.days.length - a.days.length);
  } else if (sort.type === 'alphabetical') {
    dataSorted = dataSorted.sort((a, b) => b.subject.localeCompare(a.subject));
  } else if (sort.type === 'percentage') {
    dataSorted = dataSorted.sort((a, b) => b.percentage - a.percentage);
  }
  if (sort.direction === 'increscent') dataSorted.reverse();
  
  return dataSorted;
}

export function getDayURL(day, studentID) {
  const dayAsDateTime = DateTime.fromISO(day);
  const dayForURL = dayAsDateTime.toFormat('dd-MM-yyyy');
  return `/dia/${dayForURL}` + (studentID ? `?destacar=${studentID}` : '');
}

// esperando lançar ARRAY.group... enquanto isso, código roubado (e adaptado)
function groupByProperty(array, property, humanReadable = false) {
  const groupedItems = array.reduce((result, item) => {
    const key = humanReadable ? `${item[property][0] + 1}ª fileira, ${item[property][1] + 1}ª cadeira` : JSON.stringify(item[property]);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});

  return groupedItems;
}