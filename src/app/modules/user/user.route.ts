import express from "express";
import { userController } from "./user.controller";
import { UserServices } from "./user.service";
// import { StudentControllers } from "./student.controller";

const router = express.Router();
router.post("/", userController.createUser);
router.get("/", userController.getAllUsers);
router.get("/:userId", userController.getSingleUser);
// router.post("/create-student", StudentControllers.createStudent);

// router.get("/:studentId", StudentControllers.getSingleStudent);

// router.delete("/:studentId", StudentControllers.deleteStudent);

// router.get("/", StudentControllers.getAllStudents);

export const UserRoutes = router;
