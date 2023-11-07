import {createSlice} from "@reduxjs/toolkit";
import type { RootState } from '../store/store'

const initialState = {
    name : "",
    location : "",
    cgpa : "",
    id : "",
    type : "add"
}

const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        setTodo : (state, action) => {
            state.name = action.payload.name;
            state.location = action.payload.location;
            state.cgpa = action.payload.cgpa;
            state.id = action.payload.id;
            state.type = action.payload.type;
        },
        setEmpty : (state) => {
            state.name = "";
            state.location = "";
            state.cgpa = "";
            state.id = "";
            state.type = "add";
        }

    }
});


export const {setTodo, setEmpty} = todoSlice.actions;

export const selectTodo = (state : RootState) => state.todo;


export default todoSlice.reducer;