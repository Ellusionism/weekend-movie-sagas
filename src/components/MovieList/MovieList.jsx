import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
    // Tells Sagas to get the list of movies

    const getDetails = (id) => {
        history.push(`/details/${id}`)
        // Takes user to details page for the selected movie when the div is clicked
    };

    return (
        <main>
            <h1>MovieList</h1>
            <section className="moviesGrid">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick = {() => getDetails(movie.id)}>
                            <h3 className="movieTitle">{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>
    );
} // Displays a div with the poster and title for each movie

export default MovieList;