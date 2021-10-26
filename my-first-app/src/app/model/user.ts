export interface User {
  userName: string;
  email: string;
  password: string;
  mobile: string;
}

export interface UserForLogin {
  userName: string;
  password: string;
  token: string;
  id: number;
  name: string;
  role: string;
}

export class UserForLogin {
  userName: string = '';
  password: string = '';
  token: string = '';
  id: number = 0;
  name: string = '';
  role: string = '';
}
export interface UserForRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
  role: string | undefined;
  myReferralCode: string | undefined;
  referralCode: string | undefined;
}
