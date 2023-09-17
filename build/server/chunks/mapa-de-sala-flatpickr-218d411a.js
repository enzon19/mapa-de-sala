import { DateTime } from 'luxon';

function countStudentsAttendance(layout) {
  const students = layout.flat();
  const studentsAttendance = students.filter((student) => student.id != "clssrmmp_space" && student.id != "clssrmmp_empty");
  return studentsAttendance.length;
}
function countChairs(layout) {
  const students = layout.flat();
  const chairs = students.filter((student) => student.id != "clssrmmp_space");
  return chairs.length;
}
function countSpaces(layout) {
  const students = layout.flat();
  const spaces = students.filter((student) => student.id == "clssrmmp_space");
  return spaces.length;
}
function countEmptyChairs(layout) {
  const students = layout.flat();
  const emptyChairs = students.filter((student) => student.id == "clssrmmp_empty");
  return emptyChairs.length;
}
function getAttendance(layout, studentID) {
  const students = layout.flat();
  const attendance = students.includes(studentID);
  return attendance;
}
function getAttendancesAndAbsences(allClassroomMapData, studentID) {
  const allDays = allClassroomMapData.map((data) => data.day);
  let attendances = [];
  for (const classroomMapData of allClassroomMapData) {
    const layout = classroomMapData.columns;
    if (getAttendance(layout, studentID))
      attendances.push(classroomMapData.day);
  }
  const absences = allDays.filter((date) => !attendances.includes(date));
  return { attendances, absences };
}
function countAttendancesAndAbsences(attendances, absences) {
  const attendancesAmount = attendances.length;
  const absencesAmount = absences.length;
  const numberOfDays = attendancesAmount + absencesAmount;
  const attendancesPercentage = Math.trunc(attendancesAmount / numberOfDays * 100);
  const absencesPercentage = Math.trunc(absencesAmount / numberOfDays * 100);
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
function getAttendancesAndAbsencesFixedAndWithStudentData(allClassroomMapData, student) {
  let { attendances, absences } = getAttendancesAndAbsences(allClassroomMapData, student.id);
  const firstAttendance = attendances[0];
  const firstAttendanceAsDateTime = DateTime.fromISO(firstAttendance);
  const lastAttendance = attendances.at(-1);
  const lastAttendanceAsDateTime = DateTime.fromISO(lastAttendance);
  if (student.left)
    absences = absences.filter((date) => DateTime.fromISO(date) <= lastAttendanceAsDateTime);
  if (student.late)
    absences = absences.filter((date) => DateTime.fromISO(date) >= firstAttendanceAsDateTime);
  return { ...student, ...countAttendancesAndAbsences(attendances, absences) };
}
function getPosition(layout, studentID, reverseOrder = false, fillSpaces) {
  for (let i = 0; i < layout.length; i++) {
    let currentColumn = fillSpaces > 0 ? new Array(fillSpaces - layout[i].length).fill("clssrmmp_space").concat(layout[i]) : layout[i].filter((student) => student !== "clssrmmp_space");
    if (reverseOrder)
      currentColumn.reverse();
    const deskIndex = currentColumn.indexOf(studentID);
    if (deskIndex !== -1) {
      return [i, deskIndex];
    }
  }
  return [-1, -1];
}
function getPositionDayByDay(allClassroomMapData, studentID, reverseOrder = false, fillSpaces) {
  return allClassroomMapData.map((classroomMapData) => {
    const layout = classroomMapData.columns;
    return {
      day: classroomMapData.day,
      tags: classroomMapData.tags,
      position: getPosition(layout, studentID, reverseOrder, fillSpaces)
    };
  });
}
function generateFrequencyOfPosition(allClassroomMapData, studentID, reverseOrder = false, fillSpaces) {
  const positionDayByDay = getPositionDayByDay(allClassroomMapData, studentID, reverseOrder, fillSpaces);
  const daysAccordingPosition = groupByProperty(positionDayByDay, "position");
  return Object.entries(daysAccordingPosition).map(([position, days]) => ({
    position: JSON.parse(position),
    frequency: days.length
  }));
}
function generateRankedGroupedPositionHumanReadable(allClassroomMapData, studentID, reverseChairOrder = false, sort) {
  const positionDayByDay = getPositionDayByDay(allClassroomMapData, studentID, reverseChairOrder);
  const daysAccordingPosition = groupByProperty(positionDayByDay, "position", true);
  const data = Object.entries(daysAccordingPosition).map(([position, days]) => ({
    position: `${position} (${days.length} ${days.length === 1 ? "dia" : "dias"})`,
    days
  }));
  let dataSorted = data;
  if (sort.type === "days") {
    dataSorted = dataSorted.sort((a, b) => b.days.length - a.days.length);
  } else if (sort.type === "desks") {
    dataSorted = dataSorted.sort((a, b) => b.days[0].position[1] - a.days[0].position[1]);
  } else if (sort.type === "rows") {
    dataSorted = dataSorted.sort((a, b) => b.days[0].position[1] - a.days[0].position[1]).sort((a, b) => b.days[0].position[0] - a.days[0].position[0]);
  }
  if (sort.direction === "increscent")
    dataSorted.reverse();
  return dataSorted;
}
function generateDatasetsOfStudentsAttendanceAndChairs(allClassroomMapData) {
  let dataset = [
    {
      label: "Alunos",
      data: [],
      borderColor: ["#94461b"],
      backgroundColor: ["#94461b"]
    },
    {
      label: "Cadeiras",
      data: [],
      borderColor: ["#255ab2"],
      backgroundColor: ["#255ab2"]
    }
  ];
  for (const data of allClassroomMapData) {
    const layout = data.columns.map((column) => column.map((id) => ({ id })));
    const dayFormatted = DateTime.fromISO(data.day).toFormat("dd/MM");
    dataset[0].data.push({ x: dayFormatted, y: countStudentsAttendance(layout) });
    dataset[1].data.push({ x: dayFormatted, y: countChairs(layout) });
  }
  return dataset;
}
function generateDatasetsOfSpacesAndEmptyChairs(allClassroomMapData) {
  let dataset = [
    {
      label: "Vazias",
      data: [],
      borderColor: ["#ad2e2b"],
      backgroundColor: ["#ad2e2b"]
    },
    {
      label: "Buracos",
      data: [],
      borderColor: ["#6b44bc"],
      backgroundColor: ["#6b44bc"]
    }
  ];
  for (const data of allClassroomMapData) {
    const layout = data.columns.map((column) => column.map((id) => ({ id })));
    const dayFormatted = DateTime.fromISO(data.day).toFormat("dd/MM");
    dataset[0].data.push({ x: dayFormatted, y: countEmptyChairs(layout) });
    dataset[1].data.push({ x: dayFormatted, y: countSpaces(layout) });
  }
  return dataset;
}
function generatePositionTimeline(allClassroomMapData, studentID, reverseOrder = false, fillSpaces, sort = {}) {
  const data = getPositionDayByDay(allClassroomMapData, studentID, reverseOrder, fillSpaces).filter((d) => !d.position.includes(-1));
  let timeline = [];
  let currentStartDate = data[0].day;
  let currentEndDate = data[0].day;
  let currentPosition = data[0].position;
  for (let i = 1; i < data.length; i++) {
    const currentDate = data[i].day;
    const currentPositionArray = data[i].position;
    if (JSON.stringify(currentPosition) === JSON.stringify(currentPositionArray)) {
      currentEndDate = currentDate;
    } else {
      timeline.push(data.filter(({ day }) => DateTime.fromISO(day) >= DateTime.fromISO(currentStartDate) && DateTime.fromISO(day) <= DateTime.fromISO(currentEndDate)));
      currentStartDate = currentDate;
      currentEndDate = currentDate;
      currentPosition = currentPositionArray;
    }
  }
  timeline.push(data.filter(({ day }) => DateTime.fromISO(day) >= DateTime.fromISO(currentStartDate) && DateTime.fromISO(day) <= DateTime.fromISO(currentEndDate)));
  if (sort.type === "days") {
    timeline = timeline.sort((a, b) => a.length - b.length);
  } else if (sort.type === "desks") {
    timeline = timeline.sort((a, b) => a[0].position[1] - b[0].position[1]);
  } else if (sort.type === "rows") {
    timeline = timeline.sort((a, b) => a[0].position[0] - b[0].position[0]);
  }
  if (sort.direction === "decrescent")
    timeline.reverse();
  return timeline;
}
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

export { generateRankedGroupedPositionHumanReadable as a, generatePositionTimeline as b, countAttendancesAndAbsences as c, generateFrequencyOfPosition as d, generateDatasetsOfStudentsAttendanceAndChairs as e, generateDatasetsOfSpacesAndEmptyChairs as f, getAttendancesAndAbsences as g, getAttendancesAndAbsencesFixedAndWithStudentData as h, countStudentsAttendance as i, countChairs as j, countSpaces as k, countEmptyChairs as l };
//# sourceMappingURL=mapa-de-sala-flatpickr-218d411a.js.map
