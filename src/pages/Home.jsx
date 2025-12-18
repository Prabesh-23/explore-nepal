import { useState } from "react";
import PlaceCard from "../components/PlaceCard";
import places from "../data/places";

const Home = () => {
  const [search, setSearch] = useState("");

  // Filter places based on search input (case-insensitive)
  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search places..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          margin: "20px auto",
          display: "block",
          width: "250px",
        }}
      />

      <div className="home">
        {filteredPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
};

export default Home;
