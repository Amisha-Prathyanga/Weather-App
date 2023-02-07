import "holderjs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";
import cloudBack from "../img/Logo.png";
import dashBack from "../img/DashBack.jpg";
import cloud1 from "../img/cloud1.png";
import cardBack from "../img/CloudBack.png";
import "../css/WeatherList.css";
const WeatherList = ({ details }) => {
  return (
    // <Container className="cards">
    //   <Row>
    //     <div weather-card>
    //       {details.list.map((detail) => (
    //         <Col xs={12} sm={6} md={4} lg={3}>
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src={cloud1} />
    //           <Link to={`/${detail.id}`}>
    //             <Card.ImgOverlay>
    //               <Card.Title>
    //                 {detail.name}, {detail.sys.country}
    //               </Card.Title>
    //               {/* alt+0176 ---> degree symbol */}
    //               <Card.Text>Temp Min: {detail.main.temp_min}°C</Card.Text>
    //               <Card.Text>Temp Max: {detail.main.temp_max}°C</Card.Text>
    //               <Card.Text>
    //                 Time : {new Date(detail.dt).toLocaleTimeString()}
    //               </Card.Text>
    //               {/* <Card.Text>
    //             Date : {new Date(detail.dt).toLocaleDateString()}
    //           </Card.Text> */}
    //             </Card.ImgOverlay>
    //           </Link>
    //           <Card.Body>
    //             <div className="detail-preview" key={detail.id}>
    //               <Card.Text>Pressure : {detail.main.pressure}</Card.Text>
    //               <Card.Text>Humudity : {detail.main.humidity}</Card.Text>
    //               <Card.Text>Visibility : {detail.visibility}</Card.Text>
    //             </div>
    //           </Card.Body>
    //         </Card>
    //         </Col>
    //       ))}
    //     </div>
    //     </Row>
    // </Container>

    //   <Container className="cards" style={{ clear: "both", marginTop: "10rem"  }}>
    //   <Row className="d-flex justify-content-center">
    //     {details.list.map((detail) => (
    //       <Col className="mx-auto card-spacing" style={{ float: "left", width: "45%", marginRight: "1rem", marginBottom: "1rem" }} xs={12} sm={6} md={4} lg={3}>
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src={cloud1} />
    //           <Link to={`/${detail.id}`}>
    //             <Card.ImgOverlay>
    //               <Card.Title>
    //                 {detail.name}, {detail.sys.country}
    //               </Card.Title>
    //               <Card.Text>Temp Min: {detail.main.temp_min}°C</Card.Text>
    //               <Card.Text>Temp Max: {detail.main.temp_max}°C</Card.Text>
    //               <Card.Text>
    //                 Time : {new Date(detail.dt).toLocaleTimeString()}
    //               </Card.Text>
    //             </Card.ImgOverlay>
    //           </Link>
    //           <Card.Body>
    //             <Card.Text>Pressure : {detail.main.pressure}</Card.Text>
    //             <Card.Text>Humudity : {detail.main.humidity}</Card.Text>
    //             <Card.Text>Visibility : {detail.visibility}</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>

    // <Container className="cards" style={{ clear: "both", marginTop: "10rem" }}>
    //   <Row className="d-flex justify-content-center">
    //     {details.list.map((detail, index) => (
    //       <Col
    //         className="mx-auto card-spacing"
    //         style={{ width: "45%", marginRight: "1rem", marginBottom: "1rem" }}
    //         xs={12}
    //         sm={6}
    //         md={4}
    //         lg={3}
    //       >
    //         <Card style={{ width: "18rem" }}>
    //           <Card.Img variant="top" src={cloud1} />
    //           <Link to={`/${detail.id}`}>
    //             <Card.ImgOverlay>
    //               <Card.Title>
    //                 {detail.name}, {detail.sys.country}
    //               </Card.Title>
    //               <Card.Text>Temp Min: {detail.main.temp_min}°C</Card.Text>
    //               <Card.Text>Temp Max: {detail.main.temp_max}°C</Card.Text>
    //               <Card.Text>
    //                 Time : {new Date(detail.dt).toLocaleTimeString()}
    //               </Card.Text>
    //             </Card.ImgOverlay>
    //           </Link>
    //           <Card.Body className="card-body">
    //             <div className="card-body-text">
    //               <Card.Text>Pressure : {detail.main.pressure}</Card.Text>
    //               <Card.Text>Humudity : {detail.main.humidity}</Card.Text>
    //             </div>
    //             <div className="card-body-text">
    //               <Card.Text>Humudity : {detail.main.humidity}</Card.Text>
    //             </div>
    //             <div className="card-body-text">
    //               <Card.Text>Visibility : {detail.visibility}</Card.Text>
    //             </div>
    //           </Card.Body>
    //         </Card>
    //         {(index + 1) % 2 === 0 ? <div style={{ clear: "both" }} /> : null}
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>

    // details.list.map((detail) => (
    //   <Card style={{ width: "40%" }}>
    //     <Card.Img
    //       variant="top"
    //       src={cardBack}
    //       style={{ backgroundColor: "lightblue" }}
    //     />
    //     <Link to={`/${detail.id}`}>
    //       <Card.ImgOverlay>
    //         <Card.Title>
    //           {detail.name}, {detail.sys.country}
    //         </Card.Title>
    //         <Card.Text>Temp Min: {detail.main.temp_min}°C</Card.Text>
    //         <Card.Text>Temp Max: {detail.main.temp_max}°C</Card.Text>
    //         <Card.Text>
    //           Time : {new Date(detail.dt).toLocaleTimeString()}
    //         </Card.Text>
    //       </Card.ImgOverlay>
    //     </Link>
    //     <Card.Body>
    //       <Card.Text>Pressure : {detail.main.pressure}</Card.Text>
    //       <Card.Text>Humudity : {detail.main.humidity}</Card.Text>

    //       <Card.Text>Humudity : {detail.main.humidity}</Card.Text>

    //       <Card.Text>Visibility : {detail.visibility}</Card.Text>
    //     </Card.Body>
    //   </Card>
    // )
    // )

    //--------------------------------------------------------------------------------------------------------

    <div className="card-main">
      {details.list.map((detail) => (
        <Link to={`/${detail.id}`}>
          <div className="card card-each">
            <img className="card-img-top card-img" src={cardBack} />
            <div className="card-top-left">
              <h2>
                {detail.name}, {detail.sys.country}
              </h2>
              <p>Time : {new Date(detail.dt).toLocaleTimeString()}</p>
              <h4>{detail.weather[0].description}</h4>
            </div>
            <div className="card-top-right">
              <h1>{detail.main.temp}°C</h1>
              <h5>Temp Min: {detail.main.temp_min}°C</h5>
              <h5>Temp Max: {detail.main.temp_max}°C</h5>
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
      ))}
    </div>
  );
};

export default WeatherList;
