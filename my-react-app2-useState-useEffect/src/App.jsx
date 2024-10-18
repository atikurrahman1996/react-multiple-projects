import "./App.css";
import Counter from "./Counter";
import Counter2 from "./Counter2";
//import CreatingButton from "./CreatingButton";
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
      <Counter2></Counter2>
    </>
  );
}

export default App;
