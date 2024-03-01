import mongoose from "mongoose";
import { RESULT_STATUS } from "../../constants";
import TaskModel from "../../models/tasks";




export default async function getAllTask(id: any) {
    // console.log("🚀 ~ getAllTask ~ id:", id)
    const userId = new mongoose.Types.ObjectId(id.id)
    try {
        const getAllTask = await TaskModel.find({ userId, isDeleted: false })
        // console.log("🚀 ~ getAllTask ~ getAllTask:", getAllTask)
        return {
            status: RESULT_STATUS.SUCCESS,
            data: getAllTask
        }
    } catch (error) {
        console.error("🚀 ~ editTask ~ error:", error)

    }
}