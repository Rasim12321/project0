import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import CountriesContent from "./CountriesContent";
import Navibar from "./Navbar";
import "./App.css";

export default function AppCountries() {
  return (
    <Provider store={store}>
      <Navibar />
      <CountriesContent />
    </Provider>
  );
}
