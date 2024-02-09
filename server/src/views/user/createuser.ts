import UserModel from '../../models/user/index';
import { registerbody } from '../../types';
import { RESULT_STATUS } from '../../constants'

export default async function createUser({ name, email, password, contactNo }: registerbody) {

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return {
                status: RESULT_STATUS.FAILURE,
                message: "User Already exists"
            }

        }

        const newUser = await UserModel.create({ name, email, password, contactNo });
        return {
            status: RESULT_STATUS.SUCCESS,
            message: "User Created successfully"
        }
    } catch (error) {
        console.error("🚀 ~ createUser ~ error:", error)
    }

}