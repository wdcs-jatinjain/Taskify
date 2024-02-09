import Views from "@/views";
import { createUserValidation } from './userValidations';
import { registerbody } from "@/types";


export default async function createUserController({ body: { name, email, password, contactNo } }: { body: registerbody }, res: any) {

    try {
        await createUserValidation.validateAsync({ name, email, password, contactNo }, { abortEarly: false });
        const newUser = await Views.userViews.createUserViews({ name, email, password, contactNo });

        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};