import React, { Component, useState } from 'react';

export const Joke = (props) => {
  const [scoreUp, setScoreUp] = useState(0);
  const [scoreDown, setScoreDown] = useState(0);

  const handleClickUp = () => {
    setScoreUp(scoreUp + 1);
  };

  const handleClickDown = () => {
    setScoreDown(scoreDown + 1);
  };

  console.log(props);
  /*  {
    id: 'user02',
    avatar:
      'https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user02.png',
    name: 'wetcxjfsj',
    text: "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
    likes: 50,
    dislikes: 10,
  }, */

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={props.avatar} />
            <p className="user-name">{props.name}</p>
          </div>

          <p className="joke__text">{props.text}</p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={handleClickUp}
          ></button>

          <span id="likes-up" className="likes-count likes-count--up">
            {scoreUp}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={handleClickDown}
          ></button>

          <span id="likes-down" className="likes-count likes-count--down">
            {scoreDown}
          </span>
        </div>
      </div>
    </div>
  );
  console.log('hej');
};
