import express from "express"
import cookieParser from "cookie-parser"
import connectDB from "./src/db/index.js"
import userRoutes from "./src/routes/user.routes.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cookieParser())
app.use(express.json())

// routes
app.use('/api/v1' , userRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });