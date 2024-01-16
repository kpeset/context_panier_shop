/* eslint-disable react/prop-types */

export default function GameCard({ game }) {
  return (
    <div className="game_card">
      <h3>{game.name}</h3>
      <img src={game.img} alt={game.name} />
      <p>{game.price}euros</p>
      <button>Ajouter au panier</button>
    </div>
  );
}
