import { Link, useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return (
    <div>
      <h2>Total number of phone is: {phones.length}</h2>

      {/* to display phone data */}

      {phones.map((phone) => (
        <li key={phone.id}>
          <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phones;
