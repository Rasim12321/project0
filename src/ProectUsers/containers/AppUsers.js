import React from "react";
import { Provider } from "react-redux";
import Users from "./Users";
import { store } from "../reducers/store";

export default function AppUsers(){
    return(
        <>
            <Provider store={store}>
                <Users />
            </Provider>
        </>
    )
}