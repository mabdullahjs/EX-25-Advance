import express from "express"
import { loginUser, logoutUser, regenerateAccessToken, registerUser } from "../controllers/user.controller.js";
import authenticateUser from "../middleware/auth.middleware.js";


const router = express.Router();

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/generatetoken', regenerateAccessToken)

router.get('/userdata', authenticateUser, (req, res) => {
    const id = req.userId
    res.json({
        message: "you are getting all user detail",
        id
    })
})

export default router