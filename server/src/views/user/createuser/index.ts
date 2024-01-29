import UserModel from '../../../models/user/index';



export default async function createUser(data: any) {
   
    try {
        const newUser = await UserModel.create(data);
        return newUser;
    } catch (error) {
        console.log("🚀 ~ createUser ~ error:", error)
    }

}