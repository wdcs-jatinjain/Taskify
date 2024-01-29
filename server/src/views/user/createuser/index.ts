import UserModel from '../../../models/user/index';


interface UserData {
    name: string;
    contactNo?: string;
    email: string;
    password: string;
    isactive?: boolean;
    isdelete?: boolean;
    recoverCode?: number;
    assignTask?: string;
    createdTask?: string;
}

export default async function createUser(data: UserData) {

    try {
        const newUser = await UserModel.create(data);
        return newUser;
    } catch (error) {
        console.error("🚀 ~ createUser ~ error:", error)
    }

}