import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>REST Countries: {countries.length}</h1>

      {countries.map((country) => (
        // eslint-disable-next-line react/jsx-key
        <Country country={country}></Country>
      ))}
    </div>
  );
};
export default Countries;
