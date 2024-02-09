import UserModel from '../../models/user/index';
import { registerbody } from '../../types';
import { RESULT_STATUS } from '../../constants';
import jwt from "jsonwebtoken";

const JWT_SECRET = 'your_secret_key';

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
        const newToken = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

        return {
            status: RESULT_STATUS.SUCCESS,
            message: "User Created successfully",
            data: {
                userId: newUser._id ,
                token: newToken
            }
        }
    } catch (error) {
        console.error("🚀 ~ createUser ~ error:", error)
    }

}