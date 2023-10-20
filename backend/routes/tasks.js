import express from "express";
const router = express.Router();
import * as taskController from "../controllers/task-controller.js";
// import upload from '../config/'

//List tasks with filtering options
router.get("/", taskController.listTasks);

//Add a new task with image
router.post("/add-task", taskController.addTask);

//Edit task,including image edit
router.post("/edit-task", taskController.editTask);

//Delete task,including the image deletion
router.delete("/delete-task/:id", taskController.deleteTask);

//Show a single task with its image
router.get("/task/:id", taskController.getTask);

export default router;
