import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  getCountry,
  setShowCountries
} from "../redux/features/country/countrySlice";

export default function Countries() {
  const dispatch = useDispatch();

  const { countries, loading, showCountries } = useSelector(
    (state) => state.country
  );

  useEffect(() => {
    dispatch(getCountry());
  }, []);

  const getAllCountries = () => {
    //dispatch(setShowCountries());
    console.log("hiddenAllcountries");
    dispatch(setShowCountries());
  };

  return (
    <div className="Countries">
      <button onClick={getAllCountries}>Show/Hidden Countries</button>
      {showCountries === true
        ? loading === false
          ? countries?.data?.map((dt, i) => <div key={i}>{dt.name.common}</div>)
          : null
        : null}
    </div>
  );
}
