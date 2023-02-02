import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
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
    <div className="blog-details">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {detail && (
        <div>
          {detail.list.map((detail) => (
            <div className="detail-preview" key={detail.id}>
              <h3>{detail.name}</h3>
              <h4>{detail.coord.lat}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
