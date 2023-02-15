import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import AddCity from "./components/addCity";
import Home from "./Pages/Home";
import WeatherDetails from "./components/WeatherDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Background from "./components/background";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Background />
      <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addCity" element={<AddCity />} />
        <Route path="/:id" element={<WeatherDetails />} />
      </Routes>
      </div>

      <Footer/>
      {/*    */}
    </Router>
  );
}

export default App;
