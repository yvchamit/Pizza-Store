import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Header.css";

function Header() {
  const history = useHistory();

  return (
    <header className="header">
      <div className="logo-field">
        <p className="logo">Teknolojik Yemekler</p>
      </div>

      <div className="header-content">
        <p className="head-text">fırsatı kaçırma</p>
        <h1>
          Kod acıktırır
          <br />
          Pizza, doyurur
        </h1>
        <button className="header-btn" onClick={() => history.push("/pizza")}>
          Acıktım
        </button>
      </div>
    </header>
  );
}

export default Header;
