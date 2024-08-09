import React from "react";
import Def from "../default";

interface IPlace {
  id: string;
  name: string;
  pic: string;
  cuisines: string;
  city: string;
  state: string;
}

interface IIndexProps {
  places: IPlace[];
}

const Index: React.FC<IIndexProps> = ({ places }) => {
  const placesFormatted = places.map((place) => (
    <div className="col-sm-6" key={place.id}>
      <h2>
        <a href={`/places/${place.id}`}>{place.name}</a>
      </h2>
      <p className="text-center">{place.cuisines}</p>
      <img src={place.pic} alt={place.name} />
      <p className="text-center">
        Located in {place.city}, {place.state}
      </p>
    </div>
  ));

  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div className="row">{placesFormatted}</div>
      </main>
    </Def>
  );
};

export default Index;
