import Todos from "../models/todos.models.js"

const addTodo = async (req , res) => {
    res.send('todo added')
}
const getAllTodo = async (req , res) => {
    res.send('all todos')
}
const getSingleTodo = async (req , res) => {
    res.send('single todo')
}
const deleteTodo = async (req , res) => {
    res.send('todo deleted')
}
const editTodo = async (req , res) => {
    res.send('todo edited')
}


export {addTodo , getAllTodo , getSingleTodo , deleteTodo , editTodo}