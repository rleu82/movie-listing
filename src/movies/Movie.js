import React from 'react';
import PropTypes from 'prop-types';

export function Movie({ movie }) {
    return <li>{movie.title}</li>;
}

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};
