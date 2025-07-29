import Search from "../search";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [WeatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("Hermosillo");
  }, []);

  console.log(WeatherData);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {WeatherData?.name}, <span>{WeatherData?.sys?.country}</span>
            </h2>
            <div className="date">
              <span>{getCurrentDate()}</span>
            </div>
            <div className="temp">
              {WeatherData?.main?.temp
                ? `${(WeatherData.main.temp - 273.15).toFixed(0)}°C`
                : "Loading..."}
            </div>
            <p className="description">
              {WeatherData && WeatherData.weather[0] && WeatherData.weather[0]
                ? WeatherData.weather[0].description
                : ""}
            </p>
            <div className="weather-info">
              <div className="column">
                <div>
                  <p className="wind">Wind Speed: {WeatherData?.wind?.speed}</p>
                </div>
              </div>
              <div className="column">
                <div>
                  <p>Humidity: {WeatherData?.main?.humidity}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
