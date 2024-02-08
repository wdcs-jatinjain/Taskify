import { registerbody } from '../../controllers/user/params/registerbody';
import UserModel from '../../models/user/index';


export default async function createUser({ name, email, password, contactNo, recoveryCode }: registerbody) {

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return {
                status: "failure",
                message: "User Already exists"
            }

        }
        const newUser = await UserModel.create({ name, email, password, contactNo, recoveryCode });
        return {
            status: "success",
            message: "User Created successfully"
        }
    } catch (error) {
        console.error("🚀 ~ createUser ~ error:", error)
    }

}