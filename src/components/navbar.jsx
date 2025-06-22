import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white sticky top-0 left-0 right-0 z-50 w-full shadow-md">
      <div className="w-screen px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2">

        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="stacked books"
            className="bg-blue-300 rounded-full w-14 h-14"
          />
          <h1 className="text-lg md:text-xl font-semibold whitespace-nowrap">
            Online Library System
          </h1>
        </div>

        <nav className="flex gap-6 text-sm md:text-base py-1 border-b-1 border-t-1 md:border-none">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/browse" className="hover:underline">
            Browse Books
          </Link>
          <Link to="/add" className="hover:underline">
            Add Book
          </Link>
        </nav>

        <p className="text-xs italic text-center mx-2">
          Brought to you by React + Redux
        </p>
      </div>
    </header>
  );
};

export default Navbar;
