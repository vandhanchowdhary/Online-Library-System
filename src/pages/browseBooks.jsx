import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/bookCard";

const categories = ["All", "Fiction", "Non-Fiction", "Sci-Fi"];

const BrowseBooks = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Get Redux books list
  const books = useSelector((state) => state.books.list);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    navigate(selected === "All" ? "/browse" : `/books/${selected}`);
  };

  const filteredBooks = books.filter((book) => {
    const matchCategory =
      !category ||
      category === "All" ||
      book.category.toLowerCase() === category.toLowerCase();
    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="p-4 w-full">
      <h1 className="text-2xl font-bold mb-6">Browse your favourite books</h1>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <h2>Category:</h2>
        <select
          value={category || "All"}
          onChange={handleCategoryChange}
          className="border p-2 rounded-xl"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by typing the book title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border bg-gray-200 p-2 rounded-xl flex-1"
        />

        <button
          onClick={() => setSearchTerm("")}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Clear
        </button>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No books found.</p>
      )}
    </div>
  );
};

export default BrowseBooks;
