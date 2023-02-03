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
    <Container  clasName="WDetail-card">
    <div >
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {detail && (
        <div>
          {detail.list.map((detail) => (
            <div  key={detail.id}>
              <div className="d-flex justify-content-center">
                <div style={{ width: "40rem" }}>
                  <Card  clasName="WDetail-card" >
                    <Card.Img variant="top" src={lightBlue} />
                    <Card.ImgOverlay>
                      <Card.Title>{detail.name}</Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body>
                      <Card.Text>
                        <h3>{detail.name}</h3>
                        <h4>{detail.coord.lat}</h4>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>

    </Container>
  );
};

export default WeatherDetails;
