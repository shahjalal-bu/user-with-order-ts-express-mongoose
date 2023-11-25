import bcrypt from "bcrypt";

import { Schema, model } from "mongoose";
import config from "../../config";
import {
  TAddress,
  TOrder,
  TUser,
  TUserFullName,
  UserModel,
} from "./user.interface";

const userFullNameSchema = new Schema<TUserFullName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
});
const addressSchema = new Schema<TAddress>({
  street: {
    type: String,
    required: [true, "Street is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
});
const orderSchema = new Schema<TOrder>({
  price: Number,
  productName: String,
  quantity: Number,
});
const userSchema = new Schema<TUser, UserModel>({
  userId: { type: Number, required: [true, "ID is required"], unique: true },
  username: {
    type: String,
    required: [true, "User Name is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    maxlength: [20, "Password can not be more than 20 characters"],
    select: false,
  },
  fullName: {
    type: userFullNameSchema,
    required: [true, "Name is required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  hobbies: {
    type: [
      {
        type: String,
      },
    ],
  },
  address: {
    type: addressSchema,
  },
  orders: {
    type: [{ type: orderSchema }],
  },
});

//hashed a password

userSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

//make password empty string

userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

userSchema.statics.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId });
  return existingUser;
};

export const User = model<TUser, UserModel>("User", userSchema);
