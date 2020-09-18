import React from 'react';

function Food({fav}) {
  return (
  <h3>I love {fav}</h3>
  );
}

const foodLink = [
  {
    name: '김치'
  },
  {
    name: '라면'
  },
  {
    name: '삽겹살'
  }
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
