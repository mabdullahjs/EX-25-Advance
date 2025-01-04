import express from "express";
import { addCourse, getCourseWithId } from "../controllers/course.controllers.js";

const router = express.Router();

router.post("/course", addCourse);
router.get("/course/:id", getCourseWithId);

export default router;