import { Link } from "react-router-dom";

const BookCard = ({ id, title, author, description, rating, category, cover }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-3 w-64 shrink-0 flex flex-col transform transition-all duration-200 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-500">
      {cover && (
        <img
          src={cover}
          alt={`${title} cover`}
          className="h-40 w-full object-cover mb-2 rounded"
        />
      )}

      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-700">by {author}</p>
        <p className="text-sm mt-2 line-clamp-3">{description}</p>
      </div>

      <div className="mt-3">
        <p className="text-sm line-clamp-1 w-max px-2 py-1 rounded-2xl bg-gray-300">
          Category: {category.replace(/\b\w/g, (char) => char.toUpperCase())}
        </p>
        <p className="text-sm mt-1">⭐ {rating}</p>
        <Link
          to={`/book/${id}`}
          className="mt-2 text-blue-600 hover:underline block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;