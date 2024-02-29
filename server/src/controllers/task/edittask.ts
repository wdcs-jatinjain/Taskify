import { Response } from "express";
import { edittaskbody } from "../../types";
import Views from "../../views";
import { edittaskvalidation } from "./taskvalidation";


export default async function editTaskController({ body: { title, description, catagory, status, priority }, query: { id } }: { body: edittaskbody, query: { id: string } }, res: Response) {



    try {
        await edittaskvalidation.validateAsync({ title, description, catagory, status, priority }, { abortEarly: false });
        const editTaskViews = await Views.taskViews.editTaskViews({ title, description, catagory, status, priority, id })

        res.status(201).json(editTaskViews)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}