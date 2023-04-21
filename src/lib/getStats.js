export function getStudentsPresentAmount(classroomMapColumnsData) {
  return classroomMapColumnsData.map(column => column.filter(student => student.id != "clssrmmp_space" && student.id != "clssrmmp_empty")).flat().length;
}

export function getChairsAmount(classroomMapColumnsData) {
  return classroomMapColumnsData.map(column => column.filter(student => student.id != "clssrmmp_space")).flat().length;
}

export function getSpacesAmount(classroomMapColumnsData) {
  return classroomMapColumnsData.map(column => column.filter(student => student.id == "clssrmmp_space")).flat().length;
}

export function getEmptyChairsAmount(classroomMapColumnsData) {
  return classroomMapColumnsData.map(column => column.filter(student => student.id == "clssrmmp_empty")).flat().length;
}