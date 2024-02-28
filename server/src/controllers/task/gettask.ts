import { Response, Request } from "express";
import Views from "../../views";



export default async function getAllTaskController(req: Request, res: Response) {

    try {
        const getAllTaskViews = await Views.taskViews.getAllTaskViews()

        res.status(201).json(getAllTaskViews)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}