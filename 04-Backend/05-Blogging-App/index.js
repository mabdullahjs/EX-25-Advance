import dotenv from "dotenv";
dotenv.config();
import express from "express"
import cors from "cors"
import connectDB from "./src/db/index.js";

import userRoutes from "./src/routes/user.routes.js"
import postRoutes from "./src/routes/post.routes.js"
import likeRoutes from "./src/routes/like.routes.js"
import commentRoutes from "./src/routes/comment.routes.js"



const app = express()


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/v1' , userRoutes)
app.use('/api/v1' , postRoutes)
app.use('/api/v1' , likeRoutes)
app.use('/api/v1' , commentRoutes)




connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!! ", err);
    });