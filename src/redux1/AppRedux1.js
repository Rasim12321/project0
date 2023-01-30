import AppMy from "./AppMy"
import { Provider } from "react-redux"
import {store} from './store'



export default function AppRedux1(){

    return(
            <Provider store={store}>
                <AppMy />
            </Provider>
    )
}