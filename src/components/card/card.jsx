import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import { FiveStarRating } from "../fiveStarRating";
import "./card.css";

const Card = ({ data, onClick }) => {
  const rating = Math.trunc(data.vote_average / 2) + 0.5;

  const handleClick = () => {
    onClick(data);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        className="card-img"
        src={SMALL_IMG_COVER_BASE_URL + data.poster_path}
        alt={data.title}
      />

      <div className="card-info">
        <h3>{data.title}</h3>
        <FiveStarRating rating={rating} />
        <p>{rating.toFixed(1)} / 5</p>
        <p>{data.release_date}</p>
      </div>
    </div>
  );
};

export default Card;
