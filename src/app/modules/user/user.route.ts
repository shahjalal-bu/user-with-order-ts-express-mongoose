import express from "express";
import { userController } from "./user.controller";

const router = express.Router();
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getSingleUser);
router.patch("/:userId", userController.updateUser);
router.delete("/:userId", userController.deleteUser);

export const UserRoutes = router;
