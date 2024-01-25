import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title: { type: String, required: true },
        description: String,
        catagory: { type: String, required: true },
        assigned_user_id: String,
        createdat: Number,
        updatedat: Number,
        status: String,
        estimate_time: Number,
        inprogress_time: Number,
        remaining_time: Number
    }
);

const TaskModel = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default TaskModel;