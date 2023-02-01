const WeatherList = ({ details }) => {
  return (
    <div className="weather-list">
      {details.list.map((detail) => (
        <div className="detail-preview" key={detail.cnt}>
          <h2>{detail.name}</h2>
          <h2>{detail.coord.lat}</h2>
        </div>
      ))}
    </div>
    // <div>
    //   <h1>{details.list.name}</h1>
    // </div>
  );
};

export default WeatherList;
