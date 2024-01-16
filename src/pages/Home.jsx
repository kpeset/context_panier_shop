import { useContext } from "react";
import BasketContext from "../contexts/BasketContext";

export default function Home() {
  const { basket } = useContext(BasketContext);

  console.info(basket);
  return (
    <>
      <h1>Accueil</h1>
      <p>
        Acheter des jeux à prix cassés ! Venez vendre vos jeux à des prix encore
        plus cassés !
      </p>
    </>
  );
}
