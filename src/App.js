/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import DogBreeds from "./pages/DogBreeds";
import FavoritDogs from "./pages/FavoritDogs";
import Header from "./components/Header";
import DogBreedsDetail from "./pages/DogBReedsDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/Home" />
        <DogBreeds path="/DogBreeds" />
        <DogBreedsDetail path="/DogBreeds/:id" />
        <FavoritDogs path="/FavoritDogs" />
      </Router>
    </div>
  );
}

export default App;
