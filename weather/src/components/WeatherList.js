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
