import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const {location, history} = this.props;
    if(location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const {location} = this.props;
    if(location.state) {
      return (
        <div className="detail">
          <img className="detail-poster" src={location.state.poster} alt={location.state.title} />
          <div className="detail-wrap">
          <h3 className="detail-title">{location.state.title}</h3>
          <p className="detail-year">{location.state.year}</p>
          <span className="detail-genres">{location.state.genres}</span>
          <p className="detail-rating">{location.state.rating}</p>
          <p className="detail-summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;