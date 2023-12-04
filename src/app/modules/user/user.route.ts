import express from 'express';
import { userController } from './user.controller';

const router = express.Router();
router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getSingleUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);
//order related
router.put('/:userId/orders', userController.addOrderToUser);
router.get('/:userId/orders', userController.getOrderForUser);
router.get(
  '/:userId/orders/total-price',
  userController.getTotalPriceOfOrderForUser,
);

export const UserRoutes = router;
