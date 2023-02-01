import AddCity from "../components/addCity";
import useFetch from "../components/useFetch";
import WeatherList from "../components/WeatherList";

const Home = () => {
  const {
    data: details,
    isPending,
    error,
  } = useFetch(process.env.REACT_APP_WEATHER_API);
  return (
    <>
      <AddCity />
      {error && alert(error)}
      {isPending && <div>Loading.....</div>}
      {details && <WeatherList details={details} />}
    </>
  );
};

export default Home;
