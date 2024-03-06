import mongoose from "mongoose";
import { RESULT_STATUS } from "../../constants";
import TaskModel from "../../models/tasks";




export default async function getAllTask(id: any) {

    const userId = new mongoose.Types.ObjectId(id.id)
    try {
        const getAllTask = await TaskModel.find({ userId, isDeleted: false })
    
        return {
            status: RESULT_STATUS.SUCCESS,
            data: getAllTask
        }
    } catch (error) {
        console.error("🚀 ~ editTask ~ error:", error)

    }
}