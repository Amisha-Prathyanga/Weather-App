import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import dashBack from "../img/DashBack.jpg";
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
    // <div className="blog-details">
    //   {isPending && <div>Loading....</div>}
    //   {error && <div>{error}</div>}
    //   {detail && (
    //     <div>
    //       {detail.list.map((detail) => (
    //         <div className="detail-preview" key={detail.id}>
    //           <h3>{detail.name}</h3>
    //           <h4>{detail.coord.lat}</h4>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>

    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      <div className="card mx-auto" style={{ width: "50%" }}>
        <div className="card-body">
          {isPending && <div>Loading....</div>}
          {error && <div>{error}</div>}
          {detail && (
            <div>
              {detail.list.map((detail) => (
                <div className="detail-preview" key={detail.id}>
                  <h3 className="card-title">{detail.name}</h3>
                  <h4 className="card-subtitle mb-2 text-muted">
                    {detail.coord.lat}
                  </h4>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
