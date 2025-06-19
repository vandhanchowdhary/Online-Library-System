import { createSlice } from "@reduxjs/toolkit";
import books from "./books"; // dummy data file

// Load from localStorage if available, otherwise use dummy data
const savedBooks = localStorage.getItem("books");

const initialState = {
  list: savedBooks ? JSON.parse(savedBooks) : books,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.push({ id: Date.now(), ...action.payload });

      // Update localStorage on add
      localStorage.setItem("books", JSON.stringify(state.list));
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;