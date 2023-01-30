import { takeEvery, put, call } from "redux-saga/effects";
import { addUsers, USERS_FETCH } from "../reducers/usersReducer";
const ftch = fetch('https://jsonplaceholder.typicode.com/users')

function* usersWorker(){
    const data = yield call(ftch)
    const json = yield call(() => new Promise(() => ftch.json()))
    console.log(json)
    put(addUsers(json))
}

export function* usersWatcher() {
    takeEvery(USERS_FETCH, usersWorker)
}