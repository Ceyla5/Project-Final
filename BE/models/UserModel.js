import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    role: {
        type: String,
        default: 'user'
    },
    password: String,
    email: {
        type: String,
        unique: true,
        required: true
    }
});

export const userModel = mongoose.model('User', userSchema);
