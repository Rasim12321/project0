import { useMemo } from "react"
import { useState } from "react"
import { useEffect } from "react"


export default function Cart(props){
    let obj = Object.keys(props.cart)
    let a = document.getElementsByName('sum')
    let i = 0
     useEffect(function(){
        a.forEach(item => i+= +item.innerHTML)
        console.log(i)

    }, i)
    return(
        <table>
            <caption>CART</caption>
            <thead>
                <tr>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>count</th>
                    <th>cost</th>
                </tr>
            </thead>
            <tbody>
                {obj.map(item => (
                    <tr className={item} key={item}>
                        <td><img className="img2" src={props.goods[item]["image"]} alt="" /></td>
                        <td>{props.goods[item]["title"]}</td>
                        <td>{props.goods[item]["cost"]}</td>
                        <td>{props.cart[item]}</td>
                        <td name='sum'>{`${props.goods[item]["cost"]}` * `${props.cart[item]}`}</td>
                        <button name="+" id={item} className="btn">+</button>
                        <button name="-" id={item} className="btn">-</button>
                        <button name="X" id={item} className="btn">X</button>
                    </tr>
                ))}
                
                {Array.from(a).map(function(item){
                    i+= +item.innerHTML
                })}
                <tr>{i}</tr>
            </tbody>
            
        </table>
    )
}