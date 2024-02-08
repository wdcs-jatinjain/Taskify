import Views from "../../views";
import { createUserValidation } from './userValidations';
import { registerbody } from "./params/registerbody";
import { generateRecoveryCode } from "./services";


export default async function createUserController({ body: { name, email, password, contactNo } }: { body: registerbody }, res: any) {

    try {
        const recoveryCode = generateRecoveryCode();

        await createUserValidation.validateAsync({ name, email, password, contactNo }, { abortEarly: false });
        const newUser = await Views.userViews.createUserViews({ name, email, password, contactNo, recoveryCode });

        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};