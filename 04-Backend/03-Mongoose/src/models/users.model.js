import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: [true , 'email is required'],
            unique: [true , 'user already exist'],
        },
        password: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            unique: [true , 'username already exist'],
            required: true
        }
    },
    {
        timestamps: true
    }
)
