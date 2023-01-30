import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { fetchCountries } from "../store/actions/Countries.actions";
import BasicExample from "./Spinner";
import { setNull } from "../store/actions/Data.actions";

export default function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const isLoading = useSelector((state) => state.loading);
  const navigate = useNavigate();

  const { continent } = useParams();
  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(setNull());
  }, []);

  if (isLoading || !countries) {
    return <BasicExample />;
  }

  const continentsCountries = countries[continent];
  const countriesCards = continentsCountries?.map((country) => {
    return (
      <Link to={`/country/${country}`} className="country" key={country}>
        {country}
      </Link>
    );
  });

  return (
    <>
      <div className="countries">{countriesCards}</div>;
      <div className="text-center">
        <Button
          variant="primary"
          className="text-center"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </div>
    </>
  );
}
