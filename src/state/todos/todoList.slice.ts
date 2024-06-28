import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export type todoObject = {
    id: string,
    value: string,
    completed: boolean
}

type todoListState = {
    value: todoObject[]
}

const initialState: todoListState = {
    value: []
}

const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{value: string}>) => {
            const newTodo: todoObject = {
                id: uuidv4(),
                value: action.payload.value,
                completed: false
            }
            state.value.push(newTodo)
        },
        deleteTodo: (state, action: PayloadAction<{id: string}>) => {
            state.value = state.value.filter((todo) => todo.id !== action.payload.id)
        },
        changeStatus: (state, action: PayloadAction<{id: string}>) => {
            if (state.value) {
            state.value.forEach(todo => {
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed
                }
            });
        }
        }
    }
})

export const {addTodo, deleteTodo, changeStatus} = todoListSlice.actions
export default todoListSlice.reducer