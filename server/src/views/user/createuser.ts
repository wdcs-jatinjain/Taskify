import UserModel from '../../models/user/index';


export default async function createUser(req: any, res: any) {

    const { name, email, password } = req.body

    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return {
                status: "failure",
                message: "User Already exists"
            }

        }
        const newUser = await UserModel.create({ name, email, password });
        return {
            status: "success",
            message: "User Created successfully"
        }
    } catch (error) {
        console.error("🚀 ~ createUser ~ error:", error)
    }

}