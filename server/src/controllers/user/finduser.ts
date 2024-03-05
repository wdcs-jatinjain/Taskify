import { Response } from "express";
import Views from "../../views";

export default async function findUserController(req: any, res: Response) {

    const id = req.query

    try {
        const findUserViewsRes = await Views.userViews.getUserViews(id)


        res.status(200).json(findUserViewsRes)
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}