import { useState } from "react";
import "./Titlecard.css"
import { Link } from "react-router-dom";
function TitleCards({title,category}) {

const [useImg, setImg] = useState([])


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjRkYzJiYzU2MTEyMDU3NmI5MGM2ZDcwYmM4ZDhlOCIsInN1YiI6IjY2NTE4ZDI4MDhiMzkzMDk5NzU1YTI3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KT3Q3ZZp_XBJTOOkGX3ijoZ5cH1tHZ7TmJd67Vo-dXo'
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}`, options)
        .then(response => response.json())
        .then(response => setImg(response.results))
        .catch(err => console.error(err)); 


  return (
    <>
      <div className="titlecards">
        <h2>{title?title:"Popular On Netflix"}</h2>

        <div className="card-list">
          {useImg.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" style={{textDecoration:"none",color:"white"}}>
                <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" className="card-img" key={index} />
                <div className="card-text">
                <p>{card.original_title}</p>
                </div>
               
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TitleCards;
