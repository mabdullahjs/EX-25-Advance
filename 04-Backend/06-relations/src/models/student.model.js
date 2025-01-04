import mongoose, { Schema } from "mongoose"

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    age:{
        type: Number,
        required: true
    },
    enrolledCourse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }
})

export default mongoose.model("Students", studentSchema);