/* eslint-disable react/prop-types */

import { useContext } from "react";
import BasketContext from "../contexts/BasketContext";

export default function GameCard({ game }) {
  const { setBasket, basket } = useContext(BasketContext);

  const addGame = () => {
    setBasket([...basket, game]);
  };

  return (
    <div className="game_card">
      <h3>{game.name}</h3>
      <img src={game.img} alt={game.name} />
      <p>{game.price}euros</p>
      <button onClick={addGame}>Ajouter au panier</button>
    </div>
  );
}
