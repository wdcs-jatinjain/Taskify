import TaskModel from "../../models/tasks";
import { addtaskbody } from "../../types";
import { RESULT_STATUS } from "../../constants";

export default async function addTask({ title, description, subCatagory, status, priority, userId }: addtaskbody) {

    const getNextOrderNumber = async () => {
        const highestOrderTask = await TaskModel.findOne({}, {}, { sort: { order: -1 } }).exec();
        return highestOrderTask ? highestOrderTask.order + 1 : 1; // Default to 1 if no tasks exist
    };
    try {
        const nextOrder = await getNextOrderNumber();
        const newTask = await TaskModel.create({ title, description, subCatagory, status, priority, userId , order: nextOrder, })

        return {
            status: RESULT_STATUS.SUCCESS,
            message: "Task added succesfully",
            data: newTask,
            taskId: newTask._id
        }
    } catch (error) {
        console.error("🚀 ~ addtask ~ error:", error)
    }
}