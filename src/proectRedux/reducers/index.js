import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleWare from 'redux-saga'
import { rootWatcher } from "../saga";
import { CountriesReducer } from "./CountriesReducer";

const sagaMiddleware = createSagaMiddleWare()

const rootReducer = combineReducers({
    countries: CountriesReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)
