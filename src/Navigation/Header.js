import { NavLink } from "react-router-dom"
import React from "react"

export default function Header() {

    return(
        <ul>
            <li><NavLink to='/'>Main</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/contacts'>Contacts</NavLink></li>
        </ul>
    )
}