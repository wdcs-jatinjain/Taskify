import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        contactNo: String,
        email: { type: String, required: true },
        password: { type: String, required: true },
        isactive: { type: Boolean, default: true },
        isdelete: { type: Boolean, default: false },
        recoverCode: Number,
        assignTask: String,
        createdTask: String,
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;