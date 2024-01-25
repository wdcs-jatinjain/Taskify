import mongoose from "mongoose";
import { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title: { type: String, required: true },
        description: String,
        catagory: { type: String, required: true },
        assignedUserId: String,
        status: {
            type: String, enum: ['ToDo', 'In Progress', 'On Hold', 'Cancelled', 'Completed'], default: 'ToDo'
        },
        priority: { type: String, enum: ['high', 'medium', 'low'], default: 'medium' },
        estimateTime: Number,
        inprogressTime: Number,
        remainingTime: Number
    }, {
    timestamps: true,
}
);

const TaskModel = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default TaskModel;