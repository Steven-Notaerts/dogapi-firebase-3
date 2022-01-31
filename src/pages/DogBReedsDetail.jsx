/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { writeItem } from "../utils/FireBase";

const DogBreedsDetail = ({ id }) => {
  //const imageUrl = process.env.REACT_APP_DOG_IMG_URL;
  const [dogDetail, setDogDetail] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function dogApiDataDetail() {
      try {
        const responseDogApiDetailData = await fetch(
          `${process.env.REACT_APP_DOG_API_URL}` + "/" + id
        );
        const detailData = await responseDogApiDetailData.json();
        console.log(detailData);
        console.log(typeof detailData.height.metric);
        console.log(typeof detailData.name);
        // console.log(dogDetail.height.metric);
        setDogDetail(detailData);
        setLoader(true);
      } catch (error) {
        console.log(error);
      }
    }
    dogApiDataDetail();
  }, []);

  return (
    <section className="dog-info">
      <div className="dog-info__container">
        {loader ? setDogDetail : <div className="loader"></div>}
        <h1 className="dog-info__title">{dogDetail.name}</h1>
        <div className="dog-info__wrapper">
          <img
            className="dog-info__img"
            src={`${process.env.REACT_APP_DOG_IMG_URL}${dogDetail.reference_image_id}.jpg`}
          />
          <div className="dog-info__details">
            <ul className="dog-info__list">
              <li className="dog-info__list-item">
                Bred for: {dogDetail.bred_for}
              </li>
              {/* <li className="dog-info__list-item">
                Height: {dogDetail.height.metric}
              </li>
              <li className="dog-info__list-item">
                Weight: {dogDetail.weight.metric}
              </li> */}
              <li className="dog-info__list-item">
                Lifespan: {dogDetail.life_span}
              </li>
              <li className="dog-info__list-item">
                Origin: {dogDetail.origin}
              </li>
            </ul>
            <button
              className="dog-info__submit"
              onClick={() => {
                writeItem(dogDetail);
                alert(dogDetail.name + " added as favorit!");
              }}
            >
              Add to favorites
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DogBreedsDetail;
