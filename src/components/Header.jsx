import { Link } from "react-router-dom";
import { useContext } from "react";
import BasketContext from "../contexts/BasketContext";

export default function Header() {
  const { basket } = useContext(BasketContext);

  return (
    <header>
      <h2>Micromania</h2>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/panier">Mon panier - {basket.length} - </Link>
        </li>
      </ul>
    </header>
  );
}
