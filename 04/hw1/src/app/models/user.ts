import {ICompamy} from './compamy';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  company: ICompamy;
}
