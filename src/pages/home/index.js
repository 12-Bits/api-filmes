import { Container, MovieList, Movie } from "./styles";
import {APIKey} from "../../config/key";
import {useState} from "react";


function Home(){

    const [movies, setMovies] = useState([])

    return(
        <Container>
        <h1>Movies</h1>
        <MovieList>

        {movies.map(movie => {
                return (
                    <Movie>
                          <a href="https://www.imdb.com/title/tt0110912/" target="_blank" rel="noopener noreferrer"> <img src={movie.image_url} alt = {movie.title} /></a>
                          <span>{movie.title}</span>
                    </Movie>
                )
            })}
         
        </MovieList>
        </Container>
    )
}

export default Home;