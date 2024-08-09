import React from "react";
import Def from "./default";

const Home: React.FC = () => (
  <Def>
    <main>
      <h1>HOME</h1>
      <div>
        <img src="/images/Popcorn.avif" alt="Popcorn from Unsplash" />
      </div>
      <div>
        Photo by <a href="AUTHOR_LINK">Charlie Harris</a> on{" "}
        <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
    </main>
  </Def>
);

export default Home;
