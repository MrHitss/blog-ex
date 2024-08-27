import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import booksReducer from "./slices/productSlice"
import blogsReducer from "./slices/blogSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: booksReducer,
        blogs: blogsReducer
    }
});

export default store