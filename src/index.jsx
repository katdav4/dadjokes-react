import { render } from 'react-dom';
import React from 'react';
import './style.css';
import { Joke } from './Component';
import { jokes } from './jokes.js';

const App = () => {
  return jokes.map((jokeItem) => {
    return (
      <Joke
        key={jokeItem.id}
        name={jokeItem.name}
        avatar={jokeItem.avatar}
        text={jokeItem.text}
        likes={jokeItem.likes}
        dislikes={jokeItem.dislikes}
      />
    );
  });
};

render(<App />, document.querySelector('#app'));
