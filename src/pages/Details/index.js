import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../config/key";
import { Container } from "./styles";
function Details() {

    const id = useParams()
    const [movie, setMovie] = useState({})
    const image_path = "https://image.tmdb.org/t/p/w500/"

useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id.id}?api_key=${APIKey}&language-en-US&page=1`)
        .then(response => response.json())
        .then(data => {
          const {title, overview, poster_path, release_date} = data

          const movie = {
            id,
            title,
            sinopse:overview,
            image: `${image_path}${poster_path}`,
            ReleaseDate: release_date,
          }
          setMovie(movie)

        })
}, [id])
  return (

      <Container>
      <div className="movie">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="details">
        <h1>{movie.title}</h1>
        <span>{movie.sinopse}</span>
      </div>
      <div className="RelaseDate">
        <span>Data de Lançamento: {movie.ReleaseDate}</span>
      </div>
      <div className="button">
        <button><a href="/">Voltar</a></button>
      </div>
      </Container>
  );
}
export default Details;