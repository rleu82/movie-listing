import React, { useState, useEffect } from 'react';
import { Movie } from './Movie';
import { Filter } from '../Filter';

const API_KEY = process.env.REACT_APP_MOVIES_KEY;
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;
const API_IMAGES_URL = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

export function MoviesList() {
    const [filter, setFilter] = useState('');
    const [movies, setMovies] = useState([]);
    const [config, setConfig] = useState({});

    // Get movie list from api
    const getMovies = async () => {
        try {
            const res = await fetch(API_URL);
            const movies = await res.json();
            setMovies(movies.results);
            console.log(movies);
        } catch (e) {
            console.error(e);
        }
    };

    // Get images from movies api
    const getMovieImages = async () => {
        try {
            const res = await fetch(API_IMAGES_URL);
            const images = await res.json();
            setConfig(images);
            console.log(images);
        } catch (e) {
            console.error(e);
        }
    };

    // call on first run only: no dependency in array make useEffect run once on mount
    useEffect(() => {
        getMovies();
        getMovieImages();
    }, []);

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className="movies-list">
                {movies
                    .filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase()))
                    .map((movie) => (
                        <Movie key={movie.id} movie={movie} config={config} />
                    ))}
            </ul>
        </div>
    );
}
