import React from 'react';
import PropTypes from 'prop-types';

export function Movie({ movie, movieImages }) {
    return (
        <li>
            {movieImages.images?.base_url && (
                <img src={movieImages.images.base_url + 'w342' + movie.poster_path} alt={movie.title + ' Poster'} />
            )}
            <h3>{movie.title}</h3>
        </li>
    );
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
    }).isRequired,
};
