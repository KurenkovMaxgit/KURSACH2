import { Router } from "express";
import * as studentController from "../controllers/studentController";

const router = Router();

router.post("/student", studentController.createStudent);
router.get("/student/:id", studentController.getStudentById);
router.get("/student", studentController.getAllStudents);
router.put("/student/:id", studentController.updateStudentById)
router.delete("/student/:id", studentController.deleteStudentById);


export default router;
