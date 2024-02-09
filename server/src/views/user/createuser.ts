import { generateRecoveryCode } from '../../models/user/index';
import { registerbody } from '../../type';
import UserModel from '../../models/user/index';


export default async function createUser({ name, email, password, contactNo }: registerbody) {

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return {
                status: "failure",
                message: "User Already exists"
            }

        }
        const recoveryCode = generateRecoveryCode();
        const newUser = await UserModel.create({ name, email, password, contactNo, recoveryCode });
        return {
            status: "success",
            message: "User Created successfully"
        }
    } catch (error) {
        console.error("🚀 ~ createUser ~ error:", error)
    }

}