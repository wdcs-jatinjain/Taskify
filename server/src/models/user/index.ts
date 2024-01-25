import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        contact_no: String,
        email: { type: String, required: true },
        password: { type: String, required: true },
        isactive: Boolean,
        isdelete: Boolean,
        recover_code: Number,
        createdat: Number,
        updatedat: Number,
        assign_task: String,
        created_task: String,
    }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export default UserModel;