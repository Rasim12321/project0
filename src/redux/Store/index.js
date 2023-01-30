import { configureStore } from "@reduxjs/toolkit";
import goodsSliceReducer from './goodsSlice'
import cartSliceReducer from "./cartSlice";

export default configureStore({
    reducer: {
        goods: goodsSliceReducer,
        cart: cartSliceReducer,
    }
})