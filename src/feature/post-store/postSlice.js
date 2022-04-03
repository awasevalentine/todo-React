import { createSlice } from "@reduxjs/toolkit";
import useFetchTodo from "../../Services/get-todo";

    // const {todo: todos, isPending, errorReporting } = useFetchTodo('http://localhost:8081/task')
    // console.log("This one must show ",todos)    

    const initialState = [
        {
            id: '1', taskTitle: 'First Post!', content: 'Hello'
        },
        {
            id: '2', taskTitle: 'Second Post', content: 'More text'
        }
    ]

    const postSlice = createSlice({
        name: 'posts',
        initialState,
        reducers: {
            postsAdded(state, action){
                state.push(action.payload)
            }
        }
    })

    export const {postsAdded} = postSlice.actions
    export default postSlice.reducer