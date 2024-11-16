import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'Todos',
    initialState: {
        todo: [
            {
                title: 'Hello world',
                id: nanoid()
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            
        },
        removeTodo: (state, action) => {

        }
    }
})

// addtodo
// delete
// edit


// const [todo , setTodo] = usestate([])
// todo
// settodo