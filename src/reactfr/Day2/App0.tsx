

interface PropTypes {

    title: string,
    director: string,
    releasedYear: number,
    genre: string,
    poster: string
}
const MovieCard = ( {title, director, releasedYear, genre, poster} : PropTypes) =>{

    return (
        <div className="movie-card">
            <h2 className='movie-title'>{title}</h2>
            <p className='movie-director'>{director}</p>
            <p className='movie-year'>{releasedYear}</p>
            <p className='movie-genre'>{genre}</p>
            <img src={poster} alt={`${title}`} />
        </div>
    )
}

export default function MovieList(){

    return (
        <div>
            <MovieCard 
             title="Inception" 
             director="Christophe Nolan"  
             releasedYear={2000}  
             genre="Science" 
             poster="https://via.placeholder.com/100"
            />

            <MovieCard 
             title="Inception" 
             director="Christophe Nolan"  
             releasedYear={2000} 
             genre="Science" 
             poster="https://via.placeholder.com/100"
            />

        <MovieCard 
             title="Inception" 
             director="Christophe Nolan"  
             releasedYear={2000} 
             genre="Science" 
             poster="https://via.placeholder.com/100"
            />
        </div>
    )
}
