
export type Gender = 'MALE' | 'FEMALE';

export interface User{
    firstName: string;
    lastName: string;
    gender: Gender;
    nickName: string;
    password: string;
    birthDate: Date;
}