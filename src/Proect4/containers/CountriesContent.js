import { BrowserRouter, Route, Routes } from "react-router-dom";
import Continents from "./Continents";
import Countries from "./Countries";
import CountryInfo from "./CountryInfo";
import BasicExample2 from "./Alert";
import "./App.css";
const CountriesContent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Continents />} />
        <Route exact path="/continent/:continent" element={<Countries />} />
        <Route exact path="/country/:country" element={<CountryInfo />} />
        <Route path="*" element={<BasicExample2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default CountriesContent;
