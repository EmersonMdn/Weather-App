// import { useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Slide from "./components/Slide/Slide";
import MainContent from "./components/MainContent/MainContent";


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;
  const urlCurrentWeather = `https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=${apiKey}&lang=es&units=metric`;

  // Imperial fahrenheit

  const getData = async () => {
    const response = await fetch(urlCurrentWeather);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    getData().then((data) => {
      setCurrentWeather(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="container">
        {currentWeather && <Slide data={currentWeather} />}

        {currentWeather && <MainContent data={currentWeather} />}
      </div>
      <small className="footer">
        Created by Emerson Medina - Frontend developer
      </small>
    </div>
  );
}

export default App;
