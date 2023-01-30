// Vendor imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Actions imports
import { fetchContinents } from "../store/actions/Continents.actions";

import BasicExample from "./Spinner";
// Styles imports
import "./App.css";

export default function Continents() {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.continents);
  const isLoading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchContinents());
  }, []);

  if (isLoading) {
    return <BasicExample />;
  }

  return (
    <div className="continents">
      {continents.map((item) => (
        <Link to={`/continent/${item}`} key={item} className="continent">
          {item}
        </Link>
      ))}
    </div>
  );
}
