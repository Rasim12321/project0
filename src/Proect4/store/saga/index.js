import { all } from "redux-saga/effects";
import { continentsWatcher } from "./continents.saga";
import { countriesWatcher } from "./countries.saga";
import { CountryInfoWatcher } from "./CountryInfo.saga";

export function* rootWatcher() {
  yield all([continentsWatcher(), countriesWatcher(), CountryInfoWatcher()]);
}
