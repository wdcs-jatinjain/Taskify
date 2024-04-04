import Category from "../../models/taskcatagory";
import { RESULT_STATUS } from "../../constants";
import UserModel from "../../models/user";

import mongoose from "mongoose";



export default async function getUserData(id:string) {



    const userId = new mongoose.Types.ObjectId(id)
    // const loggedInUser = await UserModel.findOne(userId);

    try {
        
        const getUserData = await UserModel.findById({ _id: userId, isDeleted: false })
        console.log("🚀 ~ getUserData ~ getUserData:", getUserData)
        return {
                status: RESULT_STATUS.SUCCESS,
                message: "User Data Fetch Successfully",
                data: getUserData,
            };
        
        
    } catch (error: any) {
        console.error("🚀 ~ getuser ~ error:", error)

    }
}