/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UserServices } from './user.service';
import { TOrder } from './user.interface';
import userValidationSchema, { orderValidationSchema } from './user.validation';

//create a user

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const zodParsedData = userValidationSchema.parse(userData);
    const result = await UserServices.createUser(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went wrong',
      error: error,
    });
  }
};

//get all user

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsers();

    res.status(200).json({
      success: true,
      message: 'Users are retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

//get a user with userId

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.userId;
    const result = await UserServices.getSingleUser(userId);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

//update a user

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.userId;
    const userNewData = req.body;
    const zodParsedData = userValidationSchema.parse(userNewData);
    const result = await UserServices.updateUser(userId, zodParsedData);
    res.status(200).json({
      success: true,
      message: 'User update successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

//delete a user

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.userId;
    const result = await UserServices.deleteUser(userId);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

//add order to user
const addOrderToUser = async (req: Request, res: Response) => {
  try {
    const userId: number = +req.params.userId;
    const order: TOrder = req.body;
    const zodParsedData = orderValidationSchema.parse(order);
    await UserServices.addOrderToUser(userId, zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

//get order for a user

const getOrderForUser = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.userId;
    const result = await UserServices.getOrderForUser(userId);
    res.status(200).json({
      success: true,
      message: 'Order fetch successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

//get total price of orders for a user

const getTotalPriceOfOrderForUser = async (req: Request, res: Response) => {
  try {
    const userId = +req.params.userId;
    const result = await UserServices.getTotalPriceOfOrderForUser(userId);
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const userController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrderToUser,
  getOrderForUser,
  getTotalPriceOfOrderForUser,
};
