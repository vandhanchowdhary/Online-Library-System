import BookCard from "./bookCard";
import { useNavigate } from "react-router-dom";

const BookSection = ({ title, books, category }) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col my-4 gap-2">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <button
          onClick={() => navigate(`/books/${category.toLowerCase()}`)}
          className="min-w-[100px] bg-blue-100 border rounded-md text-blue-700 px-4 py-2 shrink-0"
        >
          See More
        </button>
      </div>
      <div className="flex flex-row gap-4 py-4 overflow-x-auto">
        {books.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
};

export default BookSection;