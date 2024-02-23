import { createSlice } from "@reduxjs/toolkit";
import dataTodo from "../../Db/Todolist";

const initialState = {
  dataTodo,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(state);
      console.log(action);
      state.dataTodo = [...state.dataTodo, action.payload];
    }, 
    deleteTodo: (state, action) => {
      state.dataTodo = state.dataTodo.filter(el => el.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const IndexTodo= state.dataTodo.findIndex(el => el.id === action.payload.id)
      state.dataTodo[IndexTodo] = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTodo , deleteTodo,updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
