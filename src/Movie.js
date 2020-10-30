import React from 'react';
import PropTypes from 'prop-types';

function Movie(id, year, title, summary, poster) {
    return <h1>{title}</h1>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.String.isRequired,
    summary: PropTypes.String.isRequired,
    poster: PropTypes.String.isRequired
};

export default Movie;