import React from 'react';
import img1 from './images/steak.jpg';
import img2 from './images/pasta.jpg';
import img3 from './images/pizza.jpg';
import img4 from './images/cake.jpg';
import img5 from './images/lemonade.jpg';

function Food({name, image, altText}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={image} alt={altText} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: '스테이크',
    image: img1,
    altText: '소고기 스테이크'

  },
  {
    id: 2,
    name: '파스타',
    image: img2,
    altText: '오일 파스타'
  },
  {
    id: 3,
    name: '피자',
    image: img3,
    altText: '콤비네이션 피자'
  },
  {
    id: 4,
    name: '케이크',
    image: img4,
    altText: '망고 케이크'
  },
  {
    id: 5,
    name: '에이드',
    image: img5,
    altText: '레몬 에이드'
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food key ={dish.id} name={dish.name} image={dish.image} altText={dish.altText} />))}
    </div>
  );
}

export default App;