import "./App.css";
import Cat from "./Cat";
import Person from "./Person";
import Todo from "./Todo";
import Todo2 from "./Todo2";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Cat color="purple"></Cat>
      <Todo task="Learn react"></Todo>
      <Todo2 task="Learning React2"></Todo2>
    </>
  );
}

export default App;
