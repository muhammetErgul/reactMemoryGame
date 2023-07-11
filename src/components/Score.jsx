import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectScore,
  selectFirst,
  selectSecond,
  selectCount,
  setScore,
  resetGame,
} from "../redux/MemoryGameSlice";
function Score() {
  const score = useSelector(selectScore);
  const first = useSelector(selectFirst);
  const second = useSelector(selectSecond);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(resetGame());
    window.location.reload();
  };
  useEffect(() => {
    if (first !== "" && second !== "") {
      if (first === second) {
        dispatch(setScore(true));
      } else {
        dispatch(setScore(false));
      }
    }
  }, [first, second, score]);

  return (
    <div className="scoreContainer">
      <div className="score">Your score is: {score}</div>
      {count === 30 ? (
        <button className="play" onClick={() => handleClick()}>
          Play Again
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Score;
