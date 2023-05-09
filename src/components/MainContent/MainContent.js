import React from "react";

export default function MainContent({ data }) {
  return (
    <div className="main-content">
      <div className="tools-temp">
        <i className="fa-solid fa-temperature-quarter"></i>
        <div className="temp-option">
          <div className="celcius-btn isActive">°C</div>
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
            <p className="temp-max">17°C</p>
            <p className="temp-min">12°C</p>
          </li>
          <li>
            <p>Monday</p>
            <img src="./tools/Clear.png" alt="" />
            <p className="temp-max">15°C</p>
            <p className="temp-min">11°C</p>
          </li>
          <li>
            <p>Tuesday</p>
            <img src="./tools/Shower.png" alt="" />
            <p className="temp-max">14°C</p>
            <p className="temp-min">8°C</p>
          </li>
          <li>
            <p>Wednesday </p>
            <img src="./tools/LightCloud.png" alt="" />
            <p className="temp-max">18°C</p>
            <p className="temp-min">15°C</p>
          </li>
        </ul>
      </div>

      <div className="hightlights">
        <h3 className="today-hightlights-h3">Today's Hightlights</h3>

        <div className="hightlights-items">
          <div className="wind-status">
            <h4>Wind Status</h4>
            <div className="hightlights-status">
              <p>{data.wind.speed}</p>
              <small>m/s</small>
            </div>
          </div>

          <div className="humidity">
            <h4>Humidity</h4>
            <div className="hightlights-status">
              <p> {data.main.humidity}</p>
              <small>%</small>
            </div>
          </div>

          <div className="visibility">
            <h4>Visibility</h4>
            <div className="hightlights-status">
              <p>{data.visibility}</p>
              <small>miles</small>
            </div>
          </div>

          <div className="air-pressure">
            <h4>Air Pressure</h4>
            <div className="hightlights-status">
              <p>{data.main.pressure}</p>
              <small>mb</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
