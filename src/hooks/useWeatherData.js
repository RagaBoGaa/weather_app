import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;

function useWeatherData() {
  const [weatherData, setWeatherData] = useState(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("metric"); // metric / imperia
  const [unitBtn, setUnitBtn] = useState(true);

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [unit]);

  async function fetchData() {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${API_KEY}`
      );

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "An error occurred");
        setWeatherData(null);
        setUnitBtn(true);
      } else {
        const data = await res.json();
        setWeatherData(data);
        setError(null);
        setUnitBtn(false);
      }
    } catch (error) {
      setError(error.message || "Not a valid city");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    fetchData();
  }

  function toggleTemperatureUnit() {
    setUnit(unit === "metric" ? "imperial" : "metric");
  }

  function handleSearch(newQuery) {
    setQuery(newQuery);
  }

  return {
    weatherData,
    query,
    handleSearch,
    error,
    unit,
    setUnit,
    handleSubmit,
    toggleTemperatureUnit,
    unitBtn,
    setUnitBtn,
  };
}

export default useWeatherData;
