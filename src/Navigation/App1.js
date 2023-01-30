import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Header from "./Header"
import Main from "./Main"
import About from "./About"
import Contacts from "./Contacts"

export default function App1(){


    return(
        <>
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Contacts" element={<Contacts/>}></Route>
                </Routes>

            </Router>
        </>
    )
}