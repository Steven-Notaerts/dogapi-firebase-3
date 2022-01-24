import { readItem, removeItem } from "../utils/FireBase";
import { useState, useEffect } from "react";

const FavoritDogs = () => {
  const [favoritDogsData, setFavoritDogsData] = useState([]);
  useEffect(() => {
    async function getData() {
      return readItem().then((data) => {
        if (Object.values(data)) {
          Object.values(data).map((item) => {
            console.log(item);
          });
        } else {
          return null;
        }

        setFavoritDogsData(data);
      });
    }
    getData();
  }, []);

  return (
    <section className="favorit-dogs">
      <div className="favorit-dogs__container">
        <h1 className="favorit-dogs__title">Favorit dogs</h1>
        <ol className="favorit-dogs__list">
          {Object.values(favoritDogsData).map((favorit) => (
            <li key={favorit.id} className="favorit-dogs__list-item">
              {favorit.name}
              <button
                className="favorit-dogs__remove-btn"
                onClick={() => {
                  removeItem(favorit.id);
                  alert(favorit.name + "has been deleted from favorits list.");
                }}
              >
                Delete as favorit
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default FavoritDogs;
