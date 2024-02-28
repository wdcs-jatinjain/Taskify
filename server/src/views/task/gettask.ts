import { RESULT_STATUS } from "../../constants";
import TaskModel from "../../models/tasks";




export default async function getAllTask() {

    try {
        const getAllTask = await TaskModel.find({ isDeleted: false })
        return {
            status: RESULT_STATUS.SUCCESS,
            data: getAllTask
        }
    } catch (error) {
        console.error("🚀 ~ editTask ~ error:", error)

    }
}