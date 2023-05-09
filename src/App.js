// import { useEffect } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Slide from "./components/Slide/Slide";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [weather, setWeather] = useState(null);

  const apiKey = "f51c12c35ede56c3b82501879e911ea6";
  const url = `https://api.openweathermap.org/data/2.5/weather?id=3433955&appid=${apiKey}&lang=es&units=metric`;

  // Imperial fahrenheit

  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);

    return result;
  };

  useEffect(() => {
    getData().then((data) => {
      setWeather(data);
    });
  }, []);

  return (
    <div>
      <div className="container">
        {weather && <Slide data={weather} />}

        {weather && <MainContent data={weather} />}
      </div>
      <small className="footer">
        Created by Emerson Medina - Frontend developer
      </small>
    </div>
  );
}

export default App;
