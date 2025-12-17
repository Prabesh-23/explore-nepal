import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Home() {
  return (
    <div className="container">
      <h1>Explore Nepal 🇳🇵</h1>

      <div className="grid">
        {destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
}

export default Home;
