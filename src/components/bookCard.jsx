import { Link } from "react-router-dom";

const BookCard = ({ id, title, author, description, rating, category, cover }) => {
  return (
    <div className="bg-white shadow-xl rounded-xl p-2 w-64 shrink-0">
      {cover && (
        <img
          src={`${cover}`}
          alt={`${title} cover`}
          className="h-40 w-full object-cover mb-2 rounded"
        />
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-700">by {author}</p>
      <p className="text-sm mt-2 line-clamp-3">{description}</p>
      <p className="text-sm mt-2 line-clamp-3">Categor: {category}</p>
      <p className="text-sm mt-1">⭐ {rating}</p>
      <Link
        to={`/book/${id}`}
        className="mt-2 text-blue-600 hover:underline block"
      >
        View Details
      </Link>
    </div>
  );
};

export default BookCard;