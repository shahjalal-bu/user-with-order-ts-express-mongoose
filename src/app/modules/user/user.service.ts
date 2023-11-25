import { TOrder, TUser } from './user.interface';
import { User } from './user.model';

//create a user 
const createUser = async (userData: TUser) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User already exists!');
  }
  const result = await User.create(userData);
  return result;
};

const getAllUsers = async () => {
  const result = await User.find();
  return result;
};
const getSingleUser = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not exists!');
  }
  const result = await User.find({ userId });
  return result;
};

const updateUser = async (userId: number, updateData: TUser) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not exists!');
  }
  const result = await User.findOneAndUpdate({ userId }, updateData, {
    new: true,
  });
  return result;
};

const deleteUser = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not exists!');
  }
  const result = await User.deleteOne({ userId });
  return result;
};

const addOrderToUser = async (userId: number, order: TOrder) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not exists!');
  }
  const result = await User.findOneAndUpdate(
    { userId },
    { $push: { orders: order } },
  );
  return result;
};
const getOrderForUser = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not exists!');
  }
  const result = await User.find({ userId }, { orders: 1, _id: 0 });
  return result;
};
const getTotalPriceOfOrderForUser = async (userId: number) => {
  if (!(await User.isUserExists(userId))) {
    throw new Error('User not exists!');
  }
  const result = await User.find({ userId }, { orders: 1, _id: 0 });
  const allOrders = result[0]?.orders;
  const totalPrice = allOrders?.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  return { totalPrice: totalPrice?.toFixed(2) };
};
export const UserServices = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrderToUser,
  getOrderForUser,
  getTotalPriceOfOrderForUser,
};
