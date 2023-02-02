import "holderjs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import cloudBack from "../img/Logo.png";
import dashBack from "../img/DashBack.jpg";
import cloud1 from "../img/cloud1.png";
const WeatherList = ({ details }) => {
  return (
    <div weather-card>
      {details.list.map((detail) => (
        <Card className="card-main" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cloud1} />
          <Link to={`/${detail.id}`}>
            <Card.ImgOverlay>
              <Card.Title>
                {detail.name}, {detail.sys.country}
              </Card.Title>
              {/* alt+0176 ---> degree symbol */}
              <Card.Text>Temp Min: {detail.main.temp_min}°C</Card.Text>
              <Card.Text>Temp Max: {detail.main.temp_max}°C</Card.Text>
              <Card.Text>
                Time : {new Date(detail.dt).toLocaleTimeString()}
              </Card.Text>
              {/* <Card.Text>
                Date : {new Date(detail.dt).toLocaleDateString()}
              </Card.Text> */}
            </Card.ImgOverlay>
          </Link>
          <Card.Body>
            <div className="detail-preview" key={detail.id}>
              <Card.Text>Pressure : {detail.main.pressure}</Card.Text>
              <Card.Text>Humudity : {detail.main.humidity}</Card.Text>
              <Card.Text>Visibility : {detail.visibility}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default WeatherList;
