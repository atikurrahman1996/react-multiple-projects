import "./App.css";
import Counter from "./Counter";
import CreatingButton from "./CreatingButton";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./Users";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/*<CreatingButton/>*/}
      <Counter />
      <Team />
      <Users />
      <Friends />
    </>
  );
}

export default App;
