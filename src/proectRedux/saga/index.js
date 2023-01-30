import {all} from 'redux-saga/effects'
import {countriesWatcher} from './countriesSaga'

export function* rootWatcher() {
    yield all([countriesWatcher()])
}






