/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "@reach/router";

export default () => {
  return (
    <header class="header-nav">
      <div class="header-nav__container">
        <nav class="header-nav__list">
          <Link to="/Home" class="header-nav__list-item">
            Home
          </Link>
          <Link to="/DogBreeds" class="header-nav__list-item">
            DogBreeds
          </Link>
          <Link to="/FavoritDogs" class="header-nav__list-item">
            Favorit dogs
          </Link>
        </nav>
      </div>
    </header>
  );
};
