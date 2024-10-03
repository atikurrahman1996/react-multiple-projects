import "./App.css";
import Todo from "./Todo";
import Todo2 from "./Todo2";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
      <Person />
      <Person />
      <Person />
      <Cat color="purple"></Cat>
      <Todo task="Learn react"></Todo>
      <Todo2 task="Learning React2"></Todo2>
    </>
  );
}

function Cat(props) {
  return <h1>Meow's color is {props.color}</h1>;
}

function Person() {
  const age = 28;
  const per = { name: "Atik", age: 27 };
  return (
    <h2>
      I am a {per.name} with {age}
    </h2>
  );
}

export default App;
