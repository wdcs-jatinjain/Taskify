import { Response } from "express";
import Views from "../../views";
import { getUserDataRes } from "@/types";


interface QueryParams {
    id: string;
}

export default async function getUserDataController(req: getUserDataRes, res: Response) {

    const id = req.query

    try {
        const getUserDataViewsRes = await Views.userViews.getUserDataViews(id.id)


        res.status(200).json(getUserDataViewsRes)
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}