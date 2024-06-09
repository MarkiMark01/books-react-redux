import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewBooks, getNewUniqueBooks } from "../../shared/api";
import { addToCart, removeFromCart, clearCart } from "./booksSlice";

export const getBooks = createAsyncThunk("books/getBooks", async () => {
    try {
        const books = await getNewBooks();
        return books;
    } catch (error) {
        console.error("Error fetching books:", error.message);
        throw error;
    }
});