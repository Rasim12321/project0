import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { fetchCountryInfo } from "../store/actions/Data.actions";
import BasicExample from "./Spinner";
import BasicExample2 from "./Alert";
import BasicExample3 from "./Cards";

export default function CountryInfo() {
  const dispatch = useDispatch();
  const { country } = useParams();
  const navigate = useNavigate();
  const countryInfo = useSelector((state) => state.countryInfo);
  const isLoading = useSelector((state) => state.loading);
  useEffect(() => {
    dispatch(fetchCountryInfo(country));
  }, [country]);

  if (isLoading) {
    return <BasicExample />;
  }
  if (countryInfo == null) {
    return <BasicExample2 />;
  }

  return (
    <>
      <BasicExample3 countryInfo={countryInfo}></BasicExample3>
      {/* <div>
        <div className="">
          <img src={countryInfo.flag} alt="" />
        </div>

        <div className="info">
          <div className="data">capital : {countryInfo.capital}</div>
          <div className="data">population : {countryInfo.population}</div>
          <div className="data">square : {countryInfo.area}</div>
        </div>
      </div> */}
    </>
  );
}
