import { Response, Request } from "express";
import Views from "../../views";
import {  ordertaskbody} from "@/types";


export default async function orderTaskController(req:Request, res: Response) {
const {TaskIds} = req.body
    try {
        const orderTaskRes = await Views.taskViews.getAllTaskViews(TaskIds)

        res.status(201).json(orderTaskRes)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}