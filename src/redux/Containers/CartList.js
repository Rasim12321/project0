import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    selectGoods
} from '../Store/goodsSlice'
import {
    selectCart,
    increment,
    decrement
} from '../Store/cartSlice'
import Cart from "../Components/Cart"

export default function CartList(){
    const goods = useSelector(selectGoods)
    const cart = useSelector(selectCart)
    const dispatch = useDispatch()

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item
        return accum
    }, {} )


    const plus = (event) => {
        let t = event.target
        if(t.name === '+') dispatch(increment(t.id))
        if(t.name === '-') dispatch(decrement(t.id))
        if(t.name === 'X') document.getElementsByClassName(t.id)[0].remove()
    }


    return(
        <>
            <div onClick={plus}>
                <Cart cart={cart} goods={goodsObj}></Cart>
            </div>
        </>
    )
}