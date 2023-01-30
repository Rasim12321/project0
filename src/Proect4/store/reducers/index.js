import { combineReducers } from "redux";
import { ContinentsReducer } from "./ContinentsReducer";
import { CountriesReducer } from "./CountriesReducer";
import { CountryInfoReducer } from "./CountryInfo.reducer";
import { LoadingReducer } from "./Loading.reducer";

export const rootReducer = combineReducers({
  continents: ContinentsReducer,
  countries: CountriesReducer,
  countryInfo: CountryInfoReducer,
  loading: LoadingReducer,
});
