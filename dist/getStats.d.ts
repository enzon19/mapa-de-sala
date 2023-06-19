export function countStudentsAttendance(layout: any): any;
export function countChairs(layout: any): any;
export function countSpaces(layout: any): any;
export function countEmptyChairs(layout: any): any;
export function getAttendance(layout: any, studentID: any): any;
export function getAttendancesAndAbsences(allClassroomMapData: any, studentID: any): {
    attendances: any[];
    absences: any;
};
export function countAttendancesAndAbsences(attendances: any, absences: any): {
    attendances: {
        number: any;
        percentage: number;
    };
    absences: {
        number: any;
        percentage: number;
    };
};
export function getPosition(layout: any, studentID: any, reverseOrder: boolean, fillSpaces: any): any[];
export function getPositionDayByDay(allClassroomMapData: any, studentID: any, reverseOrder: boolean, fillSpaces: any): any;
export function generateFrequencyOfPosition(allClassroomMapData: any, studentID: any, reverseOrder: boolean, fillSpaces: any): {
    position: any;
    frequency: any;
}[];
export function generateRankedGroupedPositionHumanReadable(allClassroomMapData: any, studentID: any, reverseOrder?: boolean): {
    position: string;
    days: any;
}[];
