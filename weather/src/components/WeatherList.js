import "holderjs";
import { Link } from "react-router-dom";
import cardBack from "../img/CloudBack.png";

const WeatherList = ({ details }) => {
  const weatherColorMap = {
    "clear sky": "#40b681",
    "broken clouds": "#6249cc",
    Rain: "#70A8FF",
    "light rain": "#de944e",
    Drizzle: "#70A8FF",
    Thunderstorm: "#0E0E0E",
    Snow: "#E9F0F3",
    mist: "#9c3a3a",
    "scattered clouds": "#ffa64d",
    "few clouds": "#006699",
    "overcast clouds": "#85e0e0",
    Haze: "#7D7D7D",
    Dust: "#7D7D7D",
    Fog: "#7D7D7D",
    Sand: "#7D7D7D",
    Ash: "#7D7D7D",
    Squall: "#0E0E0E",
    Tornado: "#0E0E0E",
  };

  return (
    <>
      <div className="card-main">
        {details.list.map((detail) => {
          const bgColor =
            weatherColorMap[detail.weather[0].description] || "#388ee7";
          const cardStyle = { backgroundColor: bgColor };
          return (
            <Link to={`/${detail.id}`}>
              <div className="card card-each">
                <img
                  className="card-img-top card-img"
                  src={cardBack}
                  style={cardStyle}
                />
                <div className="card-top-left">
                  <h2>
                    {detail.name}, {detail.sys.country}
                  </h2>
                  <p>Time : {new Date(detail.dt).toLocaleTimeString()}</p>
                  <div className="card-bottom-left">
                    <h4>{detail.weather[0].description}</h4>
                  </div>
                </div>
                <div className="card-top-right">
                  <h1>{detail.main.temp}°c</h1>
                  <div className="card-bottom-right">
                    <h5>Temp Min: {detail.main.temp_min}°C</h5>
                    <h5>Temp Max: {detail.main.temp_max}°C</h5>
                  </div>
                </div>
                <div className="card-body1">
                  <div className="card-body card-body-left">
                    <p>Pressure : {detail.main.pressure}Pa</p>
                    <p>Humudity : {detail.main.humidity}%</p>
                    <p>Visibility : {detail.visibility}km</p>
                  </div>
                  <div className="card-body card-body-middle">
                    <p>
                      {detail.wind.speed}m/s {detail.wind.deg} Degree
                    </p>
                  </div>
                  <div className="card-body card-body-right">
                    <p>Sunrise: 6:05am</p>
                    <p>Sunset: 6:05am</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default WeatherList;
