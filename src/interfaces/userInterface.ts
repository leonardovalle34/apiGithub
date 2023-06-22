/* eslint-disable @typescript-eslint/naming-convention */
interface data {
  avatar_url: string;
  followers: number;
  following: number;
  login: string;
  name: string;
  location: string;
  blog: string;
}

export interface IUser {
  data: data;
}
