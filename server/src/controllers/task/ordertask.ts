import { Response, Request } from "express";
import Views from "../../views";
import {  ordertaskbodyRes } from "@/types";


export default async function orderTaskController({TaskIds}:or  dertaskbodyRes, res: Response) {
    try {
        const orderTaskRes = await Views.taskViews.getAllTaskViews({TaskIds})

        res.status(201).json(orderTaskRes)
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}