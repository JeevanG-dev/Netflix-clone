import { Link, useParams } from "react-router-dom";
import backarrow_icon from "../../assets/back_arrow_icon.png";
import "./Player.css";
import { useEffect, useState } from "react";
function Player() {
  const { id } = useParams();

  const [useApi, setApi] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjRkYzJiYzU2MTEyMDU3NmI5MGM2ZDcwYmM4ZDhlOCIsInN1YiI6IjY2NTE4ZDI4MDhiMzkzMDk5NzU1YTI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KT3Q3ZZp_XBJTOOkGX3ijoZ5cH1tHZ7TmJd67Vo-dXo",
    },
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, options)
      .then((response) => response.json())
      .then((response) => setApi(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="player">
        <Link to={`/netflix-clone`}>
        <img src={backarrow_icon} alt="" className="backimg" />
        </Link>
       

        <iframe
          src={`https://youtube.com/embed/${useApi.key}`}
          width="90%"
          height="90%"
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>

        <div className="player-info">
          <p>{useApi.published_at}</p>
          <p>{useApi.name}</p>
          <p>{useApi.type}</p>
        </div>
      </div>
    </>
  );
}

export default Player;
