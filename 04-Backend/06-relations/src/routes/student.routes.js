import express from "express";
import { addStudent, getAllStudents } from "../controllers/student.controllers.js";

const router = express.Router();

router.post("/student", addStudent);
router.get("/student", getAllStudents);

export default router;