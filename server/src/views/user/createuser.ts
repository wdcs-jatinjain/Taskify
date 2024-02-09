import UserModel from '../../models/user/index';
import { registerbody } from '@/types';


export default async function createUser({ name, email, password, contactNo }: registerbody) {

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return {
                status: "failure",
                message: "User Already exists"
            }

        }

        const newUser = await UserModel.create({ name, email, password, contactNo });
        return {
            status: "success",
            message: "User Created successfully"
        }
    } catch (error) {
        console.error("🚀 ~ createUser ~ error:", error)
    }

}