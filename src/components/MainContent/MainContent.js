import React from "react";

export default function MainContent({ data }) {
  return (
    <div className="main-content">
      <div className="tools-temp">
        <i className="fa-solid fa-temperature-quarter"></i>
        <div className="temp-option">
          <div className="celcius-btn">°C</div>
          <div className="farinheight-btn">°F</div>
        </div>
      </div>

      <div className="weather-list">
        <ul className="days-list">
          <li>
            <p>Tomorrow</p>
            <img src="./tools/Shower.png" alt="" />
            <div className="min-max">
              <p className="temp-max">{parseInt(data.main.temp_max)}°C</p>
              <p className="temp-min">{parseInt(data.main.temp_min)}°C</p>
            </div>
          </li>
          <li>
            <p>Sunday</p>
            <img src="./tools/LightCloud.png" alt="" />
            <p className="temp-max">Max</p>
            <p className="temp-min">Min</p>
          </li>
          <li>
            <p>Tomorrow</p>
            <img src="./tools/Clear.png" alt="" />
            <p className="temp-max">Max</p>
            <p className="temp-min">Min</p>
          </li>
          <li>
            <p>Tomorrow</p>
            <img src="./tools/Shower.png" alt="" />
            <p className="temp-max">Max</p>
            <p className="temp-min">Min</p>
          </li>
          <li>
            <p>Tomorrow</p>
            <img src="./tools/LightCloud.png" alt="" />
            <p className="temp-max">Max</p>
            <p className="temp-min">Min</p>
          </li>
        </ul>
      </div>

      <div className="hightlights">
        <h3 className="today-hightlights-h3">Today's Hightlights</h3>

        <div className="hightlights-items">
          <div className="wind-status">
            <h4>Wind Status</h4>
            <p>
              {data.wind.speed} <small>m/s</small>
            </p>
          </div>

          <div className="humidity">
            <h4>Humidity</h4>
            <p> {data.main.humidity} %</p>
          </div>

          <div className="visibility">
            <h4>Visibility</h4>
            <p>
              {data.visibility}
              <small>miles</small>
            </p>
          </div>

          <div className="air-pressure">
            <h4>Air Pressure</h4>
            <p>
              {data.main.pressure} <small>mb</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
