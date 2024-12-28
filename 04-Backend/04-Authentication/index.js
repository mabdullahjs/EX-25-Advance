import express from "express"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"

const app = express()
const port = 3000

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//$2b$10$hwov9547wqj56/E3VydudOEkm7ENsDypoQQhBGJvNal3H.K50u5WG

var jwtTokenExample = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hYmR1bGxhaDIwMzdAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkaHdvdjk1NDd3cWo1Ni9FM1Z5ZHVkT0VrbTdFTnNEeXBvUVFoQkdKdk5hbDNILks1MHU1V0ciLCJpYXQiOjE3MzUzNjkxODF9.6ObPDiU_tEqaIfK7AcRLDTMe_RcGmDL2f_QEyckqCPI"

app.get('/password', (req, res) => {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("abdullah", salt, function (err, hash) {
            console.log("password ===> ", hash)
            res.cookie("password", hash)
            res.send(hash)
        });
    });
})

app.get("/check-password", (req, res) => {
    bcrypt.compare("abdullah", "$2b$10$hwov9547wqj56/E3VydudOEkm7ENsDypoQQhBGJvNal3H.K50u5WG", function (err, result) {
        console.log(result)
        const cookie = req.cookies
        console.log(cookie)
        res.send(result)
    });
})


app.get('/createtoken', (req, res) => {
    let token = jwt.sign({
        email: 'mabdullah2037@gmail.com',
        password: "$2b$10$hwov9547wqj56/E3VydudOEkm7ENsDypoQQhBGJvNal3H.K50u5WG"
    }, 'ljfdlskjfkldsfjkldsjfklsd', { expiresIn: '1h' });

    console.log("token ==>", token)
    res.send(token)
})

app.get("/convert-token", (req, res) => {
    jwt.verify(jwtTokenExample, 'ljfdlskjfkldsfjkldsjfklsd', function (err, decoded) {
        if (!err) {
            console.log(decoded)
            res.send(decoded)
            return
        }
        res.send("error occured")
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})