import createUser from '../../views/user/index';
import { Request, Response } from 'express';



export default async function createUserController(req: Request, res: Response): Promise<void> {
    try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

