import { applyMiddleware, combineReducers, createStore } from "redux";
import countReducer from './countReducer'
import userReducer from './userReducer'
import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from '../saga/index.js';


const sagaMiddleware = createSagaMiddleware()
// позволяет расширить redux и позволяет обернуть метод dispatch 

const rootReducer = combineReducers({
    countReducer,
    userReducer
})

export const store =  createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)