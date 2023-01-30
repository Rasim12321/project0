import { useDispatch, useSelector } from "react-redux"
import { fetchCountry } from "../reducers/CountriesReducer"
import React from 'react'
import {useState} from 'react'
import './App.css'

export default function Continents(){
    const [cont, setCont] = useState([])
    const dispatch = useDispatch()
    const countries = useSelector(state => state.countries.countries)
    
    const formHandler = (event) => {
        event.preventDefault()
        const continent = event.target.elements.select.value
        dispatch(fetchCountry())
        setCont(continent)
    }
        

    return(
        <>
            <form onSubmit={formHandler} action="">
                <select name="select">
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Americas">Americas</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antarctic</option>
                </select>
                <button type="submit">CHOOSE</button>
            </form>
            <div className="list">
                {countries[cont]}         
            </div>
        </>
    )
}
