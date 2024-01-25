import { Request, Response } from 'express';
import UserModel from '../../../models/user/index';


async function CreateUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password } = req.body;
        const user = new UserModel({
            name, email, password,
        });
        await user.save();
        res.status(201).json({ success: true, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
}

export default CreateUser;


