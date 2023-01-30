import {put, takeEvery} from 'redux-saga/effects'
//put - dispatch для асинхронных actions
import { ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator } from '../store/countReducer'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
//колбеком передаем resolve, чтобы параметр выполнился, второй - ms

function* incrementWorker(){
    yield delay(1000)
    // пока не выполнится delay() - ждем
    yield put(incrementCreator())
    // put - dispatch, в который передаем action {type: INCREMENT}
}

function* decrementWorker(){
    yield delay(1000)
    yield put(decrementCreator())
}

export function* countWatcher(){
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    //первый параметр - тип экшена, за которым следим, второй - воркер, который должен отрабатывать,
    //когда экшн будет задиспатчен
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)

}