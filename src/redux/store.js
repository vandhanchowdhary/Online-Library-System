import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});

// Persist Redux state to localStorage on any change
let hasInitialized = false;

store.subscribe(() => {
  if (!hasInitialized) {
    hasInitialized = true;
    return; // Skip saving during first Redux init
  }

  try {
    const { books } = store.getState();
    localStorage.setItem("books", JSON.stringify(books.list));
  } catch (err) {
    console.error("Failed to save books to localStorage:", err);
  }
});

export default store;
