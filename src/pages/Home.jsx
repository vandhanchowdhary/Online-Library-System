import { useSelector } from "react-redux";
import BookSection from "../components/bookSection";

const Home = () => {
  const books = useSelector((state) => state.books.list);

  // Group books by category
  const fictionBooks = books
    .filter((book) => book.category.toLowerCase() == "fiction")
    .slice(0, 10);
  const nonFictionBooks = books
    .filter((book) => book.category.toLowerCase() == "non-fiction")
    .slice(0, 10);
  const sciFiBooks = books
    .filter((book) => book.category.toLowerCase() == "sci-fi")
    .slice(0, 10);

  return (
    <div className="flex flex-col overflow-y-auto overflow-x-hidden flex-1 p-5 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-2">
          Welcome to the Online Library!
        </h1>
        <p className="text-gray-600 text-sm">
          Explore our collection of books across various genres. You can find
          your favorite books and discover new ones!
        </p>
      </div>

      <BookSection title="Fiction" books={fictionBooks} category="fiction" />
      <BookSection
        title="Non-Fiction"
        books={nonFictionBooks}
        category="non-fiction"
      />
      <BookSection title="Sci-Fi" books={sciFiBooks} category="sci-fi" />
    </div>
  );
};

export default Home;
