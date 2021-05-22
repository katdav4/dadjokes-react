import React, { useState } from 'react';

export const Joke = (props) => {
  const [scoreUp, setScoreUp] = useState(0);
  const [scoreDown, setScoreDown] = useState(0);

  const handleClickUp = () => {
    setScoreUp(scoreUp + 1);
  };

  const handleClickDown = () => {
    setScoreDown(scoreDown + 1);
  };

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
            {scoreUp + props.likes}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={handleClickDown}
          ></button>

          <span id="likes-down" className="likes-count likes-count--down">
            {scoreDown + props.dislikes}
          </span>
        </div>
      </div>
    </div>
  );
  console.log('hej');
};
