import { useEffect, useState } from "react";
import {
  selectFirst,
  selectSecond,
  setFirst,
  setSecond,
} from "../redux/MemoryGameSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Card({ framework }) {
  const first = useSelector(selectFirst);
  const second = useSelector(selectSecond);

  const dispatch = useDispatch();

  const setFirstAndSecond = () => {
    dispatch(setFirst(""));
    dispatch(setSecond(""));
  };

  useEffect(() => {
    const openeds = document.querySelectorAll(".opened");
    const disableds = document.querySelectorAll(".disabled");
    if (first !== "" && second !== "") {
      if (first === second) {
        setFirstAndSecond();
        openeds.forEach((item) => {
          item.classList.remove("opened");
          item.classList.add("matched");
        });
      }
      if (first !== second && second !== "") {
        setFirstAndSecond();
        setTimeout(() => {
          openeds.forEach((item) => {
            item.classList.remove("opened");
            disableds.forEach((item) => {
              item.classList.remove("disabled");
            });
          });
        }, 1000);
      }
    }
  }, [first, second, dispatch]);

  const handleClick = (e, value) => {
    let item = e.target.parentElement;
    if (first === "") {
      dispatch(setFirst(value));
      item.classList.add("opened");
      item.classList.add("disabled");
    } else {
      dispatch(setSecond(value));
      item.classList.add("opened");
      item.classList.add("disabled");
    }
  };

  return (
    <div className="card " onClick={(e) => handleClick(e, framework.framework)}>
      <div className="front">?</div>
      <div className="back">
        <img
          src={
            "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/" +
            framework.framework +
            ".png"
          }
          alt=""
        />
      </div>
    </div>
  );
}
