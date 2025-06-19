import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white flex flex-row justify-between h-[12%] items-center w-full fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="flex items-center pl-29">
        <img
          src="./logo.png"
          alt="stacked books"
          className=" bg-blue-300 rounded-[100%] w-14 h-14"
        />
        <h1 className="text-xl font-semibold p-2">Online Library System</h1>
      </div>
      <nav className="">
        <div className="flex gap-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/browse" className="hover:underline">
            Browse Books
          </Link>
          <Link to="/add" className="hover:underline">
            Add Book
          </Link>
        </div>
      </nav>
      <p className="w-auto p-2 text-sm italic flex flex-wrap">
        Brought to you by React + Redux
      </p>
    </header>
  );
};

export default Navbar;
