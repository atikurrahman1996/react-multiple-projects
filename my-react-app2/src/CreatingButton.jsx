//Events in react

function handleClick(buttonNumber) {
  alert(`Button ${buttonNumber} clicked`);
}

function CreatingButton() {
  return (
    <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
  );
}

export default CreatingButton;

// Events example
