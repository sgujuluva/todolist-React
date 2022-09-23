import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./routes/todos.js"

dotenv.config();

const app = express();

app.use(express.json());

mongoose
.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`)
.then(() => {
    console.log("Database connected")
})
.catch(error => {
    console.log(error.message)
})

app.use("/api/todos",todoRoutes)

app.listen(7000, () => {
    console.log("server running in port 7000")
})