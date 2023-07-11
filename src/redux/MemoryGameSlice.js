import { createSlice } from "@reduxjs/toolkit";
import { frameworks } from "../data";

export const shuffle = () => {
  let arr = frameworks.concat(frameworks);
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const memoryGameSlice = createSlice({
  name: "memoryGame",
  initialState: {
    items: [],
    first: "",
    second: "",
    score: 0,
    count: 0,
  },

  reducers: {
    loadGame: (state) => {
      state.items = shuffle();
    },
    setFirst: (state, actions) => {
      state.first = actions.payload;
    },
    setSecond: (state, actions) => {
      state.second = actions.payload;
    },
    setScore: (state, actions) => {
      if (actions.payload === true) {
        state.score += 50;
        state.count += 2;
      } else state.score -= 10;
    },
    resetGame: (state, actions) => {
      state.first = "";
      state.second = "";
      state.score = 0;
      state.count = 0;
    },
  },
});
export const selectFrameworks = (state) => state.memoryGame.items;
export const selectFirst = (state) => state.memoryGame.first;
export const selectSecond = (state) => state.memoryGame.second;
export const selectScore = (state) => state.memoryGame.score;
export const selectCount = (state) => state.memoryGame.count;

export const { loadGame, setFirst, setSecond, setScore, resetGame } =
  memoryGameSlice.actions;

export default memoryGameSlice.reducer;
