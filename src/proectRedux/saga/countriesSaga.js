import {takeEvery, put, call} from 'redux-saga/effects'
import { addCountry, FETCH_COUNTRIES } from '../reducers/CountriesReducer'


const url = 'https://restcountries.com/v3.1/all'
const fetchCountries = () => fetch(url)

function* fetchWorker(){
    debugger
    const data = yield call(fetchCountries)
    const json = yield call(() => new Promise(result => result(data.json())))
    
    let set = new Set()
    let obj = {}
    json.forEach(item => set.add(item.region))
    set.forEach(item => obj[item] = [])
    json.forEach(item => obj[item.region].push(item.name.common))
    
    yield put(addCountry(obj))

}

export function* countriesWatcher(){
    yield takeEvery(FETCH_COUNTRIES, fetchWorker)
}


