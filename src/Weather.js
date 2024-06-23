import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="form">
        <div className="row">
          <div className="col-9">
            <input
              className="form-control"
              type="text"
              placeholder="Enter a city.."
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              className="btn btn-primary w-100"
              type="submit"
              value="search"
            />
          </div>
        </div>
      </form>
      <h1>Kyiv, Ukraine</h1>
      <ul>
        <li>Wednesday</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              className="img float-start"
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Mostly Cloudy"
            />
            <div className="float-start">
              <span className="temperature">6</span>
              <div className="units">
                <span className="unit">°C</span>
                <span className="line"></span>
                <span className="unit">°F</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
