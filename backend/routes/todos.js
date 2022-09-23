import express from "express";
import TodoModel from "../model/task.js";

const router = express.Router();

router.post("/createTask", async (req, res) => {
  try {
    const createPost = await new TodoModel(req.body).save();
    return res.status(200).json({ message: "new task added", createPost });
  } catch (error) {
    return res.status(500).json({ message: "Error happened" });
  }
});

router.get("/", async (req, res) => {
    try {
        const getAllTasks = await TodoModel.find();
        res.send(getAllTasks);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateTask = await TodoModel.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(updateTask);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deleteTask = await TodoModel.findByIdAndDelete(req.params.id);
        res.send(deleteTask);
    } catch (error) {
        res.send(error);
    }
});
export default router;
