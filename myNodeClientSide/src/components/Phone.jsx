import { useLoaderData } from "react-router-dom";

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <h2>This is single phone</h2>
      <h2>Phone name is: {phone.name}</h2>
    </div>
  );
};

export default Phone;
