import { RESULT_STATUS } from "../../constants";
import TaskModel from "../../models/tasks";
import { ordertaskbody } from "../../types";




export default async function orderTaskViews({ id,index ,ids}: ordertaskbody) {

    try {
        const { ids } = req.body;
        const bulkOps = ids.map((id, index) => {
            updateOne: {
                filter: { _id: id },
                update: { order: index }, // Assuming you have an 'order' field in your Task schema
            },
        })
        const updateOne = await TaskModel.bulkWrite(bulkOps)


        return {
            status: RESULT_STATUS.SUCCESS,
            message: "order updated Succesfully",
            data: updateOne
        }
    } catch (error) {
        console.error("🚀 ~ updateOne ~ error:", error)
    }
}