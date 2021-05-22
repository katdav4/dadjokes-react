import { render } from 'react-dom';
import React, { Component, useState } from 'react';
import './style.css';
import { Joke } from './Component';
import { jokes } from './jokes.js';

const App = () => {
  return jokes.map((jokeItem) => {
    return (
      <Joke
        /* props={jokeItem} */
        key={jokeItem.name}
        name={jokeItem.name}
        avatar={jokeItem.avatar}
        text={jokeItem.text}
        likes={jokeItem.likes}
      />
    );
  });
};

render(<App />, document.querySelector('#app'));
