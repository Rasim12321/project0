import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    selectGoods
} from '../Store/goodsSlice'
import {
    increment
} from '../Store/cartSlice'
import Goods from "../Components/Goods"

export default function GoodsList(){
    const goods = useSelector(selectGoods)
    const dispatch = useDispatch()

    const clickHandler = (event) => {
        event.preventDefault()
        let t = event.target
        if (!t.classList.contains('aaa')) return true
        dispatch(increment(t.getAttribute('data-key')))
    }

    return(
        <>
            <div onClick={clickHandler} className="div">
                {goods.map(item => <Goods all={item} key={item.articul} image={item.image} articul={item.articul} cost={item.cost} title={item.title}/>)}
            </div>
        </>
    )
}