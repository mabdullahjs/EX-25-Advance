import Course from "../models/course.models.js"
import Student from "../models/student.model.js"

const addStudent = async (req, res) => {
    const { name, email, age, enrolledCourse } = req.body;
    try {
        const student = await Student.create({ name, email, age, enrolledCourse })


        await Course.findByIdAndUpdate(
            enrolledCourse, 
            { $push: { enrolledStudents: student._id }}
        );
        res.json({
            message: 'student created',
            student
        });
    } catch (error) {
        res.status(404).json({message: 'server error' , error})
    }
}

const getAllStudents = async (req , res) => {
    const student = await Student.find({}).populate('enrolledCourse');

    res.json({student})
}

export {addStudent , getAllStudents}