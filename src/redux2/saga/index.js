import {all} from 'redux-saga/effects'
import { countWatcher } from './countSaga'
import { userWather } from './userSaga'

export function* rootWatcher() {
    yield all([countWatcher(), userWather()])
}