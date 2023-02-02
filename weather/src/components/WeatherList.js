import "holderjs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Link } from "react-router-dom";
import cloudBack from "../img/Logo.png";
import dashBack from "../img/DashBack.jpg";
import cloud1 from "../img/cloud1.png";
const WeatherList = ({ details }) => {
  return (
    <>
      {details.list.map((detail) => (
        <Card className="card-main" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={cloud1} />
          <Card.Body>
            <div className="detail-preview" key={detail.id}>
              <Link to={`/${detail.id}`}>
                <Card.Title>{detail.name}</Card.Title>
                <Card.Text>{detail.coord.lat}</Card.Text>
              </Link>
            </div>
          </Card.Body>
        </Card>
      ))}
    </>
    // <div className="weather-list">
    //   {details.list.map((detail) => (
    //     <div className="detail-preview" key={detail.id}>

    //       <Link to={`/${detail.id}`}>
    //         <h2>{detail.name}</h2>
    //         <h2>{detail.coord.lat}</h2>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
    // <div>
    //   <h1>{details.list.name}</h1>
    // </div>
  );
};

export default WeatherList;
