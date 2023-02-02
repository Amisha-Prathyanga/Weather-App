import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";
import cloudBack from "../img/Logo.png"
const WeatherList = ({ details }) => {
  return (
    <div className="weather-list">
      {details.list.map((detail) => (
        <div className="detail-preview" key={detail.id}>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={cloudBack} />
                  <Card.Body>
                    <Card.Title>{detail.name}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Link to={`/${detail.id}`}>
            <h2>{detail.name}</h2>
            <h2>{detail.coord.lat}</h2>
          </Link>
        </div>
      ))}
    </div>
    // <div>
    //   <h1>{details.list.name}</h1>
    // </div>
  );
};

export default WeatherList;
