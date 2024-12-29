import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const generateAccessToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.ACCESS_JWT_SECRET, {
        expiresIn: "6h",
    });
};
const generateRefreshToken = (user) => {
    return jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET, {
        expiresIn: "7d",
    });
};


const registerUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email) return res.status(401).json({ message: "email is required" })
    if (!password) return res.status(401).json({ message: "password is required" })

    try {
        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ message: "user already exist" })

        const createUser = await User.create({ email, password });

        res.json({
            message: "user registered successfully", user: createUser
        })
    } catch (error) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email) return res.status(400).json({ message: "email required" });
    if (!password) return res.status(400).json({ message: "password required" });

    const user = await User.findOne({ email })
    if (!user) return res.status(400).json({ message: "user is not registered" })

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "incorrect password" });

    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    res.cookie("refreshToken", refreshToken, { http: true, secure: false });

    res.json({
        message: "user logged In successfully",
        accessToken,
        refreshToken,
        user
    })
}

const logoutUser = async (req, res) => {
    res.clearCookie("refreshToken");
    res.json({ message: "user logout successfully" });
}

const regenerateAccessToken = async (req, res) => {
    // cookies sa refresh token pakarlo
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;
    if (!refreshToken)
        return res.status(401).json({ message: "no refresh token found!" });
    // jwt sa check krwao token sahi ha ya nahi
    try {
        const decodedToken = jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET);


        const user = await User.findOne({ email: decodedToken.email });

        if (!user) return res.status(404).json({ message: "invalid token" });

        const generateToken = generateAccessToken(user);
        res.json({ message: "access token generated", accesstoken: generateToken });
    } catch (error) {
        res.status(500).json({
            error: 'error occured'
        })
    }

}

const authenticateUser = async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(404).json({ message: "no token found" });

    jwt.verify(token, process.env.ACCESS_JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "invalid token" });
        console.log("authenticate user ===> ", user)
        next();
    });
};

export { registerUser, loginUser, logoutUser, regenerateAccessToken, authenticateUser }