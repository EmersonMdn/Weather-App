import React from "react";

export default function MainContent({ data, unit, setUnit }) {
  const changeToFahrengeith = () => {
    document.getElementById("celcius-btn").classList.remove("isActive");
    document.getElementById("fahrengeith-btn").classList.add("isActive");
    setUnit("imperial");
  };

  const changeToCelcius = () => {
    document.getElementById("fahrengeith-btn").classList.remove("isActive");
    document.getElementById("celcius-btn").classList.add("isActive");
    setUnit("metric");
  };

  return (
    <div className="main-content">
      <div className="tools-temp">
        <i className="fa-solid fa-temperature-quarter"></i>
        <div className="temp-options">
          <div
            id="celcius-btn"
            className="celcius-btn option-temp isActive"
            onClick={changeToCelcius}
          >
            <p>°C</p>
          </div>
          <div
            id="fahrengeith-btn"
            className="farinheight-btn option-temp"
            onClick={changeToFahrengeith}
          >
            <p>°F</p>
          </div>
        </div>
      </div>
      {/* 
      <div className="weather-list">
        <ul className="days-list">
          <li>
            <p>Tomorrow</p>
            <img src="./tools/Shower.png" alt="" />
            <div className="min-max">
              <p className="temp-max">
                {parseInt(data.main.temp_max)}
                <span>{unit === "metric" ? "°C" : "°F"}</span>
              </p>
              <p className="temp-min">
                {parseInt(data.main.temp_min)}
                <span>{unit === "metric" ? "°C" : "°F"}</span>
              </p>
            </div>
          </li>
          <li>
            <p>Sunday</p>
            <img src="./tools/LightCloud.png" alt="" />
            <p className="temp-max">
              17
              <span>{unit === "metric" ? "°C" : "°F"}</span>
            </p>
            <p className="temp-min">
              12
              <span>{unit === "metric" ? "°C" : "°F"}</span>
            </p>
          </li>
          <li>
            <p>Monday</p>
            <img src="./tools/Clear.png" alt="" />
            <p className="temp-max">
              15
              <span>{unit === "metric" ? "°C" : "°F"}</span>
            </p>
            <p className="temp-min">
              11
              <span>{unit === "metric" ? "°C" : "°F"}</span>
            </p>
          </li>
          <li>
            <p>Tuesday</p>
            <img src="./tools/Shower.png" alt="" />
            <p className="temp-max">
              14
              <span>{unit === "metric" ? "°C" : "°F"}</span>
            </p>
            <p className="temp-min">
              8<span>{unit === "metric" ? "°C" : "°F"}</span>
            </p>
          </li>
          <li>
            <p>Wednesday </p>
            <img src="./tools/LightCloud.png" alt="" />
            <p className="temp-max">
              18
              <span>{unit === "metric" ? "°C" : "°F"}</span>
            </p>
            <p className="temp-min">
              15
              <span>{unit === "metric" ? "°C" : "°F"}</span>
            </p>
          </li>
        </ul>
      </div> */}

      <div className="hightlights">
        <h3 className="today-hightlights-h3">Today's Hightlights</h3>

        <div className="hightlights-items">
          <div className="wind-status">
            <h4>Wind Status</h4>
            <div className="hightlights-status">
              <p>
                <i class="fa-solid fa-wind"></i> {data.wind.speed}
              </p>
              <small>{unit === "metric" ? "M/S" : "M/H"}</small>
            </div>
          </div>

          <div className="humidity">
            <h4>Humidity</h4>
            <div className="hightlights-status">
              <p>
                <i class="fa-solid fa-water"></i> {data.main.humidity}
              </p>
              <small>%</small>
            </div>
          </div>

          <div className="visibility">
            <h4>Visibility</h4>
            <div className="hightlights-status">
              <p>
                <i class="bx bx-cloud"></i> {data.visibility}
              </p>
              <small>miles</small>
            </div>
          </div>

          <div className="air-pressure">
            <h4>Air Pressure</h4>
            <div className="hightlights-status">
              <p> {data.main.pressure}</p>
              <small>hPa</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
