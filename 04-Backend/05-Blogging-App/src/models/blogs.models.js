import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true , "title is required"],
        },
        description: {
            type: String,
            required: true
        }
    } , 
    {
        timestamps: true
    }
)


export default mongoose.model("Blog", blogSchema);