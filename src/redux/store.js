import { configureStore } from "@reduxjs/toolkit";
import memoryGameSlice from "./MemoryGameSlice";
export default configureStore({
  reducer: {
    memoryGame: memoryGameSlice
  }
});
