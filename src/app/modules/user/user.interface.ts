import { Model } from "mongoose";

export type TUserFullName = {
  firstName: string;
  lastName: string;
};
export type TAddress = {
  street: string;
  city: string;
  country: string;
};
export type TOrder = {
  productName: string;
  price: number;
  quantity: number;
};
export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TUserFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: Array<string>;
  address: TAddress;
  orders?: Array<TOrder>;
};

export interface UserModel extends Model<TUser> {
  isUserExists(userId: number): Promise<TUser | null>;
}
