import { takeEvery, put } from "redux-saga/effects";
import { setCountryInfo } from "../actions/Data.actions";
import { setLoading } from "../actions/Loading.actions";
import { FETCH_DATA } from "../actionTypes";
function* CountryInfoWorker({ countryName }) {
  try {
    yield put(setLoading(true));
    const [currentInfo] = yield fetch(
      `https://restcountries.com/v2/name/${countryName}?fullText=true`
    ).then((data) => data.json());
    yield put(setCountryInfo(currentInfo));
    yield put(setLoading(false));
  } catch (error) {
    // alert("ERROR: No Country INFO found");
    yield put(setLoading(false));
    yield put(setCountryInfo(null));
  }
}

export function* CountryInfoWatcher() {
  yield takeEvery(FETCH_DATA, CountryInfoWorker);
}
