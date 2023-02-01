import AddCity from "../components/addCity";
import useFetch from "../components/useFetch";
import WeatherList from "../components/WeatherList";
const Home = () => {
  const {
    data: details,
    isPending,
    error,
  } = useFetch(
    " http://api.openweathermap.org/data/2.5/group?id=1248991&units=metric&appid=2ff5a40ec7055129bdbd497ce586197d"
  );
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
