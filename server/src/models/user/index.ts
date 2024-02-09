import mongoose from "mongoose";
import { Schema } from "mongoose";
import crypto from 'crypto';


const userSchema = new Schema(
    {
        name: { type: String, required: true },
        contactNo: String,
        email: { type: String, required: true },
        password: { type: String, required: true },
        isactive: { type: Boolean, default: true },
        isdelete: { type: Boolean, default: false },
        recoveryCode: String,
        assignTask: String,
        createdTask: String,
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export function generateRecoveryCode(): string {
    return crypto.randomBytes(6).toString('hex');
} 

export default UserModel;



