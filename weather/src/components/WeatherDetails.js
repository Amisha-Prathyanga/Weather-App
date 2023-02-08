import "../css/WeatherDetails.css";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Card from "react-bootstrap/Card";
import dashBack from "../img/DashBack.jpg";
import lightBlue from "../img/lightBlue.jpg";
import Container from "react-bootstrap/Container";
const WeatherDetails = () => {
  const { id } = useParams();
  const {
    data: detail,
    error,
    isPending,
  } = useFetch(
    "http://api.openweathermap.org/data/2.5/group?id=" +
      id +
      "&units=metric&appid=" +
      process.env.REACT_APP_API_TOKEN
  );
  return (
    <div>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {detail && (
        <div>
          {detail.list.map((detail) => (
            <div key={detail.id}>
              <div>
                <div>
                  <div className="one-card">
                    <Card>
                      <div className="overlay-img">
                        <Card.Img src={lightBlue} style={{ width: '900px', height: '250px',}} />
                      </div>
                      <div className="card-overlay">
                        <Card.ImgOverlay>
                          <Card.Title>{detail.name}, {detail.sys.country}</Card.Title>
                          <p>Time : {new Date(detail.dt).toLocaleTimeString()}</p>
                          <div className="w-description">
                          {<p>{detail.weather[0].description}</p>}
                          </div>
                          <div className="temp">
                            <div className="main-temp">
                          <p>{detail.main.temp}°C</p>
                          </div>
                          <div className="temp-var">
                          <p>Temp Min: {detail.main.temp_min}°C</p>
                          <p>Temp Max: {detail.main.temp_max}°C</p>
                          </div>
                          </div>
                        </Card.ImgOverlay>
                      </div>
                      <div className="c-body">
                        <Card.Body>
                          <Card.Text>
                            <div className="text-left">

                           <p>Pressure : {detail.main.pressure}</p>
                           <p>Humudity : {detail.main.humidity}</p>
                           <p>Visibility : {detail.visibility}</p>
                            </div>
                            <div className="text-right">
                              <p>Sunrise: 6.05 a.m</p>
                              <p>Sunset: 6.05 a.m</p>
                            </div>
                            <div className="text-middle">
                              <p>{detail.wind.speed}m/s {detail.wind.deg} Degree</p>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
