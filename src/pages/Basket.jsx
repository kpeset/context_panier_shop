import { useContext } from "react";
import BasketContext from "../contexts/BasketContext";

export default function Basket() {
  const { basket } = useContext(BasketContext);

  const calculBasketSum = () => {
    return basket.reduce((accumulator, jeu) => accumulator + jeu.price, 0);
  };

  return (
    <>
      <h1>Mon Panier</h1>
      {basket.map((jeu, index) => (
        <div key={index}>
          <p>{jeu.name} euros</p>
          <p>{jeu.price} euros</p>
        </div>
      ))}

      <h2>Prix total :</h2>
      <h4>{calculBasketSum()} euros</h4>
    </>
  );
}
