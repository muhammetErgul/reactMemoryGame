import { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";

import { loadGame, selectFrameworks } from "../redux/MemoryGameSlice";

export default function Play() {
  const items = useSelector(selectFrameworks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGame());
  }, [dispatch]);

  return (
    <div className="playground">
      {items.map((item, id) => (
        <Card framework={item} key={id} />
      ))}
    </div>
  );
}
