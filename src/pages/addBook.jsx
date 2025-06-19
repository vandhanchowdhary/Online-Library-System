import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import { useNavigate } from "react-router-dom";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

const AddBook = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    rating: "",
    category: "Fiction",
    cover: "",
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, description, rating, category } = form;

    if (!title || !author || !description || !rating || !category) {
      setError("Please fill out all required fields.");
      return;
    }

    if (isNaN(rating) || rating < 0 || rating > 5) {
      setError("Rating must be a number between 0 and 5.");
      return;
    }

    dispatch(addBook(form));
    navigate("/browse");
  };

  return (
    <div className="p-16 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Add a Book to the Library</h1>
      <button
        onClick={() => navigate("/browse")}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back to Browse
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder="Title of the book"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating / 5"
          value={form.rating}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          min="0"
          max="5"
          step="0.1"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="url"
          name="cover"
          placeholder="Cover Image URL (optional)"
          value={form.cover}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
