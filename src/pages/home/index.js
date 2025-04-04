import { Container, MovieList, Movie } from "./styles";


function Home(){

    const movies =[
        {
            title: 'Spider-Man',
            image_url:"https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
        },
        {
            title: 'Spider-Man',
            image_url:"https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
        },
        {
            title: 'Spider-Man',
            image_url:"https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
        },
        {
            title: 'Spider-Man',
            image_url:"https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
        },
        {
            title: 'Spider-Man',
            image_url:"https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
        },
        {
            title: 'Spider-Man',
            image_url:"https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
        },
        {
            title: 'Spider-Man',
            image_url:"https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
        },
        {
            title: 'Spider-Man',
            image_url:"https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
        }
    ]
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