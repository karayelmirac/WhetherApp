import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import data from '../dataOfCities/cities.json'
const WhetherContext = createContext();
const citiesJSON = data


const WhetherProvider = ({ children }) => {
  const [whetherApi, setWhetherApi] = useState([]);
  const [city, setCity] = useState("Aydin");
  const apiKey = "039e3320b6894c22888160122230403";
  const days = "7";
  useEffect(() => {
    axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&hour=24`
    )
      .then((res) => res.data)
      .then((res) => res.forecast)
      .then((res) => setWhetherApi(res.forecastday));
  }, [city, days]);
  const values = {
    whetherApi,
    setWhetherApi,
    city,
    setCity,
    days,
    citiesJSON
  };
  if(whetherApi.length === 0 ) {
    <div>Loading..</div>
  }
  return (
    <WhetherContext.Provider value={values}>{children}</WhetherContext.Provider>
  );
};

const useWhether = () => useContext(WhetherContext);

export { useWhether, WhetherProvider };
