import { Request, Response } from 'express';
import createUser from "../../views/user";
import { createUserValidation } from './userValidations';



export default async function createUserController(req: any, res: any) {
    try {
        await createUserValidation.validateAsync(req.body, { abortEarly: false });
        const newUser = await createUser(req, res);

        // const { error, value }: any = createUserValidation.validate(req.body);
        // if (error) {
        //     res.status(400).json([postMessage, error.details[0].message])
        //     return;
        // }

        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};