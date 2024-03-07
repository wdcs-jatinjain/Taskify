import { Response, Request } from "express";
import Views from "../../views";
import { gettaskcontrollerreq, ordertaskbodyRes } from "@/types";

interface QueryParams {
    id: string;
}

export default async function orderTaskController(req: ordertaskbodyRes, res: Response) {
    const id: QueryParams = req.query;
    try {
        const orderTaskRes = await Views.taskViews.getAllTaskViews(id)

        res.status(201).json(orderTaskRes)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}