import mongoose from "mongoose";

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  input: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  }  
  /* input:String,
  isCompleted:Boolean  */
});

const TodoModel = model("TodoModel", taskSchema)

export default TodoModel