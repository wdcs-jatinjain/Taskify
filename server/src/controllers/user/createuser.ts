import createUser from "../../views";
import { createUserValidation } from './userValidations';



export default async function createUserController(req: any, res: any) {
    try {
        await createUserValidation.validateAsync(req.body, { abortEarly: false });
        const newUser = await createUser(req, res);

        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};