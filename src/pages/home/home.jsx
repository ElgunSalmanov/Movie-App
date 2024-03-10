import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../components/card/card";
import { useEffect, useState } from "react";
import getMovies from "../../helpers/fetch";
import NotMovie from "../../components/notMovie/notMovie";

const Home = () => {
  const [data, setData] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location)

  const params = new URLSearchParams(location.search).get("search") || "";

  useEffect(() => {
    getMovies("/movie/popular")
      .then(setData)
      .catch((error) => {
        console.error("Error fetching popular movies:", error);
      });
  }, []); 

  useEffect(() => {
    const filteredMovies = data.filter((movie) =>
      movie.title.toLowerCase().includes(params.toLowerCase())
    );
    setFilteredData(filteredMovies);
  }, [params, data]);

  const handleCardClick = (cardData) => {
    navigate(`/movie/${cardData.id}`, { state: cardData });
  };

  return (
    <div className="container">
      {filteredData.length !== 0 ? (
        filteredData.map((item, index) => (
          <Card key={index} onClick={handleCardClick} data={item} />
        ))
      ) : (
        <NotMovie />
      )}
    </div>
  );
};

export default Home;
