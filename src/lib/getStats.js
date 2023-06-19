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

export function getAttendancesAndAbsences(allClassroomMapData, studentID) {
  const allDays = allClassroomMapData.map(data => data.day);
	let attendances = [];
	
	for (const classroomMapData of allClassroomMapData) {
    const layout = classroomMapData.columns;
		if (getAttendance(layout, studentID)) attendances.push(classroomMapData.day);
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

export function generateRankedGroupedPositionHumanReadable(allClassroomMapData, studentID, reverseOrder = false) {
  const positionDayByDay = getPositionDayByDay(allClassroomMapData, studentID, reverseOrder);
  const daysAccordingPosition = groupByProperty(positionDayByDay, 'position', true);
  return Object.entries(daysAccordingPosition).map(([position, days]) => ({
    position: `${position} (${days.length} dias)`,
    days
  })).sort((a, b) => b.days.length - a.days.length);
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