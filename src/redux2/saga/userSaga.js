import {takeEvery, put, call} from 'redux-saga/effects'
//call -  возвращает данные, которые прилетают с сервера
import {FETCH_USERS, setUsers} from '../store/userReducer'


const url = 'http://jsonplaceholder.typicode.com/users?_limit=10'
const fetchUsersFromApi = () => fetch(url)
//результатом должен быть Promise

function* fetchUserWorker(){
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
}

export function* userWather(){
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}