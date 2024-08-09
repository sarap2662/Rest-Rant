import React from "react";
import Def from "./default";

const Error404: React.FC = () => (
  <Def>
    <main>
      <h1>404: PAGE NOT FOUND</h1>
      <p>Oops, sorry, we can't find this page!</p>
      <div>
        <img src="/images/Sad Pug.avif" alt="Sad Pug from Unsplash" />
      </div>
      <div>
        Photo by <a href="AUTHOR_LINK">Priscilla Du Preez</a> on{" "}
        <a href="UNSPLASH_LINK">Unsplash</a>
      </div>
    </main>
  </Def>
);

export default Error404;
