import Role from './role';

export default interface Student {
  id: number;
  firstName: string;
  lastName: string;
  personalIdNumber: string;
  schoolIdNumber: string;
  phoneNumber: string;
  email: boolean;
  role: Role;
  userName: string;
  createdAt: string;
  updatedAt: string;
}
