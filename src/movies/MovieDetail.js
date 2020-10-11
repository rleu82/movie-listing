import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = '?api_key=' + process.env.REACT_APP_MOVIES_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/`;

export function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        try {
            const res = await fetch(API_URL + id + API_KEY);
            const newMovie = await res.json();
            setMovie(newMovie);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getMovie();
    }, [id]);

    if (!movie.title) return null;

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <ul>
                {movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </div>
    );
}
