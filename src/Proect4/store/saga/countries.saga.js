import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { setCountries } from "../actions/Countries.actions";
import { setLoading } from "../actions/Loading.actions";
import { FETCH_COUNTRIES } from "../actionTypes";

function* countriesWorker() {
  try {
    yield put(setLoading(true));
    const data = yield fetch("https://restcountries.com/v3.1/all").then(
      (data) => data.json()
    );
    let set = new Set();
    let obj = {};
    data.forEach((item) => set.add(item.region));
    set.forEach((item) => (obj[item] = []));
    data.forEach((item) => obj[item.region].push(item.name.common));
    yield put(setCountries(obj));
    yield put(setLoading(false));
  } catch (error) {}
}

export function* countriesWatcher() {
  yield takeLatest(FETCH_COUNTRIES, countriesWorker);
}
