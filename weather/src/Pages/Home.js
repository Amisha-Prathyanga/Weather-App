import AddCity from "../components/addCity";
import useFetch from "../components/useFetch";
import WeatherList from "../components/WeatherList";
import cityID from "../data/cities.json";


const Home = () => { 

  const cityIDArr=[];
  {cityID.List.map((cityIDDetails) => {
    cityIDArr.push(Number(cityIDDetails.CityCode))
  })}
  console.log(cityIDArr);
  const {
    data: details,
    isPending,
    error,
  } = useFetch(`http://api.openweathermap.org/data/2.5/group?id=${cityIDArr}&units=metric&appid=${process.env.REACT_APP_API_TOKEN}`);
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
