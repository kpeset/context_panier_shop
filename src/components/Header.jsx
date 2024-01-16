import { Link } from "react-router-dom";

export default function Header() {
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
          <Link to="/panier">Mon panier</Link>
        </li>
      </ul>
    </header>
  );
}
