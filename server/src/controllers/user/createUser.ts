import { Response } from "express";
import Views from "../../views";
import { createUserValidation } from './userValidations';
import { registerbody } from "../../types";


export default async function createUserController({ body: { name, email, password, contactNo, catagory } }: { body: registerbody }, res: Response) {

    try {
        await createUserValidation.validateAsync({ name, email, password, contactNo, catagory }, { abortEarly: false });
        const createUserViewsRes = await Views.userViews.createUserViews({ name, email, password, contactNo, catagory });

        res.status(201).json(createUserViewsRes);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};