import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import BookSection from "../components/bookSection";

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const books = useSelector((state) => state.books.list);

  const book = books.find((b) => b.id === parseInt(bookId));

  if (!book) {
    return <div className="p-8 text-red-500">Book not found.</div>;
  }

  // Get similar books: same category, excluding current book
  const similarBooks = books
    .filter((b) => b.category === book.category && b.id !== book.id)
    .slice(0, 10);

  return (
    <div className="px-4 py-10 w-full mx-auto flex flex-col gap-2">
      <button
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 w-max"
        onClick={() => navigate(-1)}
      >
        ← Back to Browse
      </button>
      <p className="text-3xl font-bold mb-6">Book Details:</p>
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center">
        <div className="w-[30%] md:w-1/3 flex justify-center items-center">
          <img
            src={book.cover}
            alt={`${book.title} cover`}
            className="max-h-[400px] object-contain rounded shadow-md"
          />
        </div>

        <div className="flex flex-col md:w-2/3">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-lg text-gray-700 mb-1">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Description:</strong> {book.description}
          </p>
          <p className="text-yellow-600 font-medium">
            <strong>Rating:</strong> ⭐ {book.rating} / 5
          </p>
          <p className="text-gray-500 mt-2 italic">
            <strong>Category:</strong> {book.category}
          </p>
        </div>
      </div>

      {similarBooks.length > 0 && (
        <div className="mt-8">
          <BookSection
            title="Similar Books"
            books={similarBooks}
            category={book.category}
          />
        </div>
      )}
    </div>
  );
};

export default BookDetails;
