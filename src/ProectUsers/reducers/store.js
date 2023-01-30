import { applyMiddleware, combineReducers, createStore } from "redux";
import { usersReducer } from "./usersReducer";
import { rootWatcher } from "../saga/saga";
import createSagaMiddleWare from 'redux-saga'

const sagaMiddleware = createSagaMiddleWare()

const rootReducer = combineReducers({
    users: usersReducer
})
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootWatcher)