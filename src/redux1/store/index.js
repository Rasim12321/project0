import {createStore, combineReducers, applyMiddleware} from 'redux'
import {cashReducer} from './cashReducer'
import {customerReducer} from './customerReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'


//параметром принимает объект: либо просто из названий редюсеров либо из парб где ключ - просто название
const rootReducer = combineReducers({
    cash : cashReducer,
    customers : customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
