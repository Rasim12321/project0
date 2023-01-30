import React from "react";
import { Provider } from "react-redux";
import { store } from "../reducers";
import Continents from './Continents'

export default function AppRedux1(){
    return(
        <>
            <Provider store={store}>
                <Continents />
            </Provider>
        </>
    )
}


