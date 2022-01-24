/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
const DogBreeds = () => {
  const [dogApiData, setDogApiData] = useState([]);
  const [dogDetail, setDogDetail] = useState([{ id: null }]);

  useEffect(() => {
    async function dogApiData() {
      try {
        const responseDogApiData = await fetch(
          `${process.env.REACT_APP_DOG_API_URL}` +
            `${process.env.REACT_APP_DOG_API_KEY}`
        );
        const data = await responseDogApiData.json();
        console.log(data);
        setDogApiData(data);
      } catch (error) {
        console(error);
      }
    }
    dogApiData();
  }, []);
  return (
    <div className="dogbreeds">
      <div className="dogbreeds__container">
        <h1 className="dogbreeds__title">Dog breeds</h1>
        <ul className="dogbreeds__list">
          {dogApiData.map((breed) => (
            <li key={breed.id} className="dogbreeds__list-item">
              <Link
                state={{ id: breed.id }}
                to={`/DogBreeds/${breed.id}`}
                key={breed.id}
                onClick={() => {
                  setDogDetail([{ id: breed.id }]);
                }}
                className="dogbreeds__link"
              >
                <img src={breed.image.url} className="dogbreeds__img" />
                <span className="dogbreeds__name">{breed.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DogBreeds;
