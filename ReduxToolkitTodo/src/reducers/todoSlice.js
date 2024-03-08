import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[{
        id:1,
        text:"hello"
    }]
}

export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo : (state,action)=> {
            const todo = {
                id:nanoid(),   // Generate a unique ID for the new todo
                text: action.payload    // Get the text from the dispatched action
            }
            state.todos.push(todo) // Add the new todo to the todos array in the state
        },
        removeTodo: (state,action)=> {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)    // Remove the todo with the matching ID
        },
        updateTodo: (state,action)=> {
            state.todos = state.todos.map((todo)=> 
            todo.id !== action.payload ? {...todo,text: action.payload}: todo)   // Update the text of the todo with the matching ID
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions  // individually export bcz use in the components

export default todoSlice.reducer   //use in store