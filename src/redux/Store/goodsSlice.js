import { createSlice } from "@reduxjs/toolkit";
import goodsArr from '../Data/Goods.json'

export const goodsSlice = createSlice({
    name : 'goods',
    initialState : {
        goods : goodsArr,
    },
    reducers : {

    }
})

export const {} = goodsSlice.actions;
export const selectGoods = state => state.goods.goods;
export default goodsSlice.reducer

// console.log(goodsSlice.reducer)