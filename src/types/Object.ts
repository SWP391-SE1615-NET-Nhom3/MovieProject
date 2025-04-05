/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  id: string;
  userName: string;
  fullName: string;
  email: any;
  avatar: any;
  passwordHash: string;
  userRole: string;
  phoneNumber: string;
  companyCode: string;
  department: string;
  lastLogin: string;
  isActive: boolean;
  isDelete: boolean;
  createdAt: string;
  updatedAt: any;
}
export interface DecodeToken {
  Username: string;
  UserID: string;
  Avatar: string;
  FullName: string;
  MA_CONG_TY: string;
  Department: string;
  DateCreated: string;
  IS_ADMIN: string;
  exp: number;
}
