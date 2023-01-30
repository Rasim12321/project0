import { takeEvery, put, takeLatest } from "redux-saga/effects";
import { setContinets } from "../actions/Continents.actions";
import { setLoading } from "../actions/Loading.actions";
import { FETCH_CONTINENTS } from "../actionTypes";
function* continentsWorker() {
  yield put(setLoading(true));
  try {
    const data = yield fetch("https://restcountries.com/v3.1/all").then(
      (data) => data.json()
    );
    const set = new Set();
    data.forEach((element) => set.add(element.region));
    let continents = Array.from(set);
    yield put(setContinets(continents));
    yield put(setLoading(false));
  } catch (error) {}
}

export function* continentsWatcher() {
  yield takeLatest(FETCH_CONTINENTS, continentsWorker);
}
