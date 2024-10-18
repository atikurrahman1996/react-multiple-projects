import profile from "../../assets/profile.jpg.jpg";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold">Blogs by Atik</h1>
      <img src={profile} alt="" width={60} height={50} />
    </header>
  );
};

export default Header;
