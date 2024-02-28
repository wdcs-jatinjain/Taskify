import { Response } from "express";
import Views from "../../views";
import { addtaskbody } from "../../types";
import { addtaskValidation } from "./taskvalidation";



export default async function addTaskController({ body: { title, description, catagory, status, priority } }: { body: addtaskbody }, res: Response) {


    try {
        await addtaskValidation.validateAsync({ title, description, catagory, status, priority }, { abortEarly: false });
        const addTaskViews = await Views.taskViews.addTaskViews({ title, description, catagory, status, priority })

        res.status(201).json(addTaskViews)

    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }


}