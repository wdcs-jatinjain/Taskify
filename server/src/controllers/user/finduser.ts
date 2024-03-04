import { Response } from "express";
import { loginbody } from "../../types";
import Views from "../../views";
import { loginUserValidation } from "./userValidations";

export default async function findUserController(req: any, res: Response) {

    const id = req.query

    try {
        const findUserViewsRes = await Views.userViews.getUserViews(id)


        res.status(200).json(findUserViewsRes)
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}