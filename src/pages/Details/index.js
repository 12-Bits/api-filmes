import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIKey } from "../../config/key";

function Details() {

    const id = useParams()
    const {movie, setMovie} = useState({})

useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language-en-US&page=1`)
        .then(response => response.json())
        .then(data => setMovies(data.results))


}, [id]
)
  return (
    <div>
      <h1>Página de Detalhes</h1>

    </div>
  );
}
export default Details;