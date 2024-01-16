import GameCard from "../components/GameCard";

const games = [
  {
    name: "Mario Kart 8 Deluxe",
    price: 97,
    img: "https://m.media-amazon.com/images/I/81U9XosokLL.jpg",
  },
  {
    name: "Elden Ring",
    price: 74,
    img: "https://m.media-amazon.com/images/I/6110RSDn3PL.jpg",
  },
  {
    name: "Celeste",
    price: 64,
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Celeste_box_art_full.png",
  },
  {
    name: "Skyrim",
    price: 99,
    img: "https://m.media-amazon.com/images/I/517LrE6lt-L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Rory McILROY PGA TOUR",
    price: 1,
    img: "https://i.insider.com/550712ae69beddd82706ed64?width=1000&format=jpeg&auto=webp",
  },
];

export default function Shop() {
  return (
    <>
      <h1>Shop page</h1>
      <div className="list">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </>
  );
}
