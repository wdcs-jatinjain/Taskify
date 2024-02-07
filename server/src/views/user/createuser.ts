import UserModel from '../../models/user/index';
import UserData from './user'


export default async function createUser(req: any, res: any) {



    try {
        const UserData = req.body
        const existingUser = await UserModel.findOne({ UserData: UserData.email });
        if (existingUser) {
            return {
                status: "failure",
                message: "Already  User"
            }

        }
        const newUser = await UserModel.create(UserData);
        return {
            status: "success",
            message: "User Create"
        }
    } catch (error) {
        console.error("🚀 ~ createUser ~ error:", error)
    }

}