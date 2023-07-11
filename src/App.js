import Play from "./components/Play";
import Score from "./components/Score";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <h3 className="title">Memory Game</h3>
      <Play />
      <Score />
    </div>
  );
}
