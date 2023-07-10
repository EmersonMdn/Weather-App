function Slide({ data, unit }) {
  return (
    <div className="slide">
      <div className="tools">
        <div className="tools-items">
          {/* <button className="btn-search">Search for places </button> */}
          <i className="fa-solid fa-location-crosshairs" title={data.name}></i>
        </div>
      </div>

      <div className="logo">
        <div className="logo-svg">
          <img src={`./tools/${data.weather[0].main}.png`} alt="" />
        </div>
        {/* <div id="cloud">
          <span class="shadow"></span>
        </div> */}
      </div>

      <div className="temp">
        <div className="temp-txt">
          <h1>{parseInt(data.main.temp)}</h1>
          <span>{unit === "metric" ? "°C" : "°F"}</span>
        </div>
        <h2 className="day-status">{data.weather[0].description}</h2>
      </div>

      <div className="location">
        <div className="day-container">
          <p>Today</p>
          <span>
            {new Date().getDate()} / {new Date().getMonth() + 1}
          </span>
        </div>

        <div className="location-container">
          <i className="fa-solid fa-location-dot"></i>{" "}
          <span>
            {data.name}, {data.sys.country}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slide;
