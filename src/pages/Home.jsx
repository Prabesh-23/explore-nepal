import PlaceCard from "../components/PlaceCard";
import places from "../data/places";

const Home = () => {
  return (
    <div className="home">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
};

export default Home;
