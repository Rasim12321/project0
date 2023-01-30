import { store } from "./store";
import { Provider } from "react-redux";
import Saga from "./Saga";


export default function AppRedux1(){
    return(
            <Provider store={store}>
                <Saga />
            </Provider>
    )
}