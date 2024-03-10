import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BACKDROP_BASE_URL, SMALL_IMG_COVER_BASE_URL } from "../../config";
import { FiveStarRating } from "../../components/fiveStarRating";
import "./movie_info.css";

const Movie_Info = () => {
  const location = useLocation();
  const { state = {} } = location;
  const [data, setData] = useState(state);
  const rating = Math.trunc(data.vote_average / 2) + 0.5;

  useEffect(() => {
    setData(state);
  }, [state]);

  return (
    <div
      className="movie_info"
      style={{
        background: data
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${data.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className="movie_info_products">
        <div className="info_img">
          <img
            className="card_img"
            src={`${SMALL_IMG_COVER_BASE_URL + data.poster_path}`}
            alt=""
          />
        </div>
        <div className="info_title">
          <h1 className="title">{data.title}</h1>
          <FiveStarRating rating={rating} />
          <h3>{data.release_date}</h3>
          <span className="title">{data.overview}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie_Info;
