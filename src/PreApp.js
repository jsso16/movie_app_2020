import React from 'react';
import PropTypes from 'prop-types';

// 이미지 처리
import img1 from './images/steak.jpg';
import img2 from './images/pasta.jpg';
import img3 from './images/pizza.jpg';
import img4 from './images/cake.jpg';
import img5 from './images/lemonade.jpg';

function Food({name, image, altText, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={image} alt={altText} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '스테이크',
    image: img1,
    altText: '소고기 스테이크',
    rating: 5
  },
  {
    id: 2,
    name: '파스타',
    image: img2,
    altText: '오일 파스타',
    rating: 4.5
  },
  {
    id: 3,
    name: '피자',
    image: img3,
    altText: '콤비네이션 피자',
    rating: 4.8
  },
  {
    id: 4,
    name: '케이크',
    image: img4,
    altText: '망고 케이크',
    rating: 4.3
  },
  {
    id: 5,
    name: '에이드',
    image: img5,
    altText: '레몬 에이드',
    rating: 4.7
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key ={dish.id} name={dish.name} image={dish.image} altText={dish.altText} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default App;