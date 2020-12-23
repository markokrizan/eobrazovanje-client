export default interface Courses {
  espbPoints: number;
  id: number;
  name: string;
  semester: Semester;
}

export enum Semester {
  SUMMER = 'SUMMER',
  WINTER = 'WINTER',
  SUMMER_WINTER = 'SUMMER_WINTER'
}

