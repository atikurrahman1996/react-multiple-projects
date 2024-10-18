const Person = () => {
  const age = 28;
  const per = { name: "Atik", age: 27 };
  return (
    <h2>
      I am a {per.name} with {age}
    </h2>
  );
};

export default Person;
