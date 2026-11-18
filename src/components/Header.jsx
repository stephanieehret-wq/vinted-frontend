import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Vinted" />
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher des articles" />
      </div>
      <div className="header-buttons">
        <button className="btn-signup">S'inscrire</button>
        <button className="btn-login">Se connecter</button>
        <button className="btn-sell">Vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
