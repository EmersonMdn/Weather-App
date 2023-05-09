function Slide({ data }) {
  return (
    <div className="slide">
      <div className="tools">
        <div className="tools-items">
          <button className="btn-search">Search for places </button>
          <i className="fa-solid fa-location-crosshairs"></i>
        </div>
      </div>

      <div className="logo">
        <div className="logo-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            id="weather"
          >
            <g data-name="Layer 27">
              <path
                fill="#f4ec90"
                d="M25.5,13A13.51,13.51,0,0,0,13.39,32.48a1,1,0,0,0,.76.55h.14a1,1,0,0,0,.73-.32A11.43,11.43,0,0,1,23.5,29a11.29,11.29,0,0,1,4.87,1.08,1,1,0,0,0,1.08-.14A12.51,12.51,0,0,1,37.5,27h.36a1,1,0,0,0,.8-.25A1,1,0,0,0,39,26,13.43,13.43,0,0,0,25.5,13Z"
              ></path>
              <path
                fill="#c1edf4"
                d="M49.27,31A14.43,14.43,0,0,0,38.1,25a4,4,0,0,0-.6,0,14.48,14.48,0,0,0-8.85,3,13.29,13.29,0,0,0-5.15-1,13.56,13.56,0,0,0-9.72,4.13A11.5,11.5,0,0,0,15.5,54a11.22,11.22,0,0,0,3.83-.66,13.65,13.65,0,0,0,11-1.21,14.72,14.72,0,0,0,13,.65A11.5,11.5,0,1,0,49.27,31Z"
              ></path>
              <path
                fill="#f4ec90"
                d="M15.05 16.06a1 1 0 0 1-.73-.31l-1.4-1.49a1 1 0 0 1 1.45-1.37l1.41 1.49a1 1 0 0 1-.73 1.68zM10 27.86H7.93a1 1 0 0 1 0-2H10a1 1 0 0 1 0 2zM11 21.75a1 1 0 0 1-.39-.08L9.09 21a1 1 0 0 1 .79-1.84l1.51.65A1 1 0 0 1 11 21.75zM31.09 13.07l-.22 0a1 1 0 0 1-.76-1.2L30.53 10a1 1 0 1 1 1.95.43l-.42 1.86A1 1 0 0 1 31.09 13.07zM36.59 16.69a1 1 0 0 1-.63-.23 1 1 0 0 1-.14-1.41L37 13.68A1 1 0 0 1 38.49 15l-1.12 1.36A1 1 0 0 1 36.59 16.69zM40 22.07a1 1 0 0 1-.82-.42 1 1 0 0 1 .25-1.39l1.49-1.05a1 1 0 0 1 1.15 1.63l-1.5 1.05A.92.92 0 0 1 40 22.07zM21.71 12.48a1 1 0 0 1-.93-.63l-.62-1.55A1 1 0 0 1 22 9.56l.62 1.55a1 1 0 0 1-.56 1.3A1 1 0 0 1 21.71 12.48z"
              ></path>
            </g>
          </svg>
        </div>
      </div>

      <div className="temp">
        <div className="temp-txt">
          <h1>{parseInt(data.main.temp)}</h1>
          <span>°C</span>
        </div>
        <h2 className="day-status">{data.weather[0].description}</h2>
      </div>

      <div className="location">
        <div className="day-container">
          <p>Today</p>
          <span>
            {new Date().getDate()}/{new Date().getMonth()}
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
