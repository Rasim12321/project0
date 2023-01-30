import React from "react"
import store from './Store'
import { Provider } from "react-redux"
import App from "./App"
import './App.css'

export default function App3(){

    return(
        <Provider store={store}>
            <App></App>
        </Provider>
        
    )
}