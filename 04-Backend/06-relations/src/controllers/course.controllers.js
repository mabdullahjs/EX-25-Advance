import Course from "../models/course.models.js"


const addCourse = async (req, res) => {
    const { name, duration, enrolledStudents } = req.body;
    const course = await Course.create({ name, duration, enrolledStudents })

    res.json({
        message: 'course created',
        data: course
    });
}

const getCourseWithId = async (req, res) => {
    const { id } = req.params
    const course = await Course.findById(id).populate('enrolledStudents');
    if (!course) {
        res.json({
            message: 'No course found'
        });
        return
    }
    res.json({ data: course })
}


export { addCourse , getCourseWithId }