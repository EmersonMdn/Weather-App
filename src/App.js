// import { useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Slide from "./components/Slide/Slide";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [unit, setUnit] = useState("metric");
  const [currentWeather, setCurrentWeather] = useState(null);

  const userLocation = navigator.geolocation;

  const apiKey = process.env.REACT_APP_API_KEY;
  const urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;

  // Imperial fahrenheit

  const getData = async () => {
    const response = await fetch(urlCurrentWeather);
    const result = await response.json();
    return result;
  };

  const getLocation = async () => {
    if (userLocation) {
      userLocation.getCurrentPosition(success);
    }
  };

  const success = async (data) => {
    let lat = await data.coords.latitude;
    let lon = await data.coords.longitude;
    setLatitude(lat);
    setLongitude(lon);
  };

  useEffect(() => {
    getLocation();
    getData().then((data) => {
      setCurrentWeather(data);
      console.log(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlCurrentWeather]);

  return (
    <div>
      <div className="container">
        {currentWeather && <Slide data={currentWeather} unit={unit} />}

        {currentWeather && (
          <MainContent data={currentWeather} unit={unit} setUnit={setUnit} />
        )}
      </div>
      <small className="footer">
        Created by Emerson Medina - Frontend developer
      </small>
    </div>
  );
}

export default App;
