import React from "react";
import { useWhether } from "../context/WhetherContext";
import { useEffect } from "react";

function Dropdown() {
  const { city, setCity, citiesJSON } = useWhether();


  const choosedCity = (item) => {
    item.preventDefault();
    setCity(item.target.value);
  };

  return (
    <div className="dropdown">
      <label htmlFor="cities" className="cities">Choose a city:</label>
      <br />
      <select name="cities" value={city} className="cities1" onChange={choosedCity}>
        {citiesJSON.map((item) => {
          return (
            <option onChange={choosedCity} key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
