import Logo from "../img/Logo.png"
const Header = () => {
    return ( 
      <div className="header">
        <h1>Weather App</h1>
        <img className="logo" src={Logo} />

      </div>
     );
}
 
export default Header;