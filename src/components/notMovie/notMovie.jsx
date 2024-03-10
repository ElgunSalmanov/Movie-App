import logo from "../../assets/logo/logo.jpeg";
import "./notMovie.css";

const NotMovie = () => {
  return (
    <div className="movie">
      <img className="movie-image" src={logo} alt="" />
      <h1 className="movie-title">Movie not found</h1>
    </div>
  );
};

export default NotMovie;
