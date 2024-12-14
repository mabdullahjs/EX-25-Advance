import express from "express"

const app = express()
const port = 3000

// middleware
app.use(express.json());

const todo = [];

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/todos', (req, res) => {

    res.json({
        message: 'All todos',
        todo
    })
})

app.post('/todos', (req, res) => {
    const { title } = req.body
    const obj = {
        title,
        id: Date.now()
    }
    todo.push(obj)

    res.json({
        message: "todo added successfully",
        todo: obj
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})