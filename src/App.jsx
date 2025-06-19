import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/browseBooks";
import BookDetails from "./pages/bookDetails";
import AddBook from "./pages/addBook";
import NotFound from "./pages/404_NotFound";

const App = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-gray-50 px-4 pt-20 w-[100%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/browse" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:bookId" element={<BookDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
