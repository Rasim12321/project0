import React from "react"
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom"

export default function Nav(){
    

    return(
        <>
            <Router>
                <Routes>
                    {/* <Route path="/" component={<Main/>} ></Route>
                    <Route path="/Main" component={<Home/>} ></Route>
                    <Route path="/" component={<About/>} ></Route> */}
                </Routes>
            </Router>

        </>
    )
}