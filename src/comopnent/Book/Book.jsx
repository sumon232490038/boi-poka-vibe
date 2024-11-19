import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    category,
    tags,
    bookId,
    totalPages,
    rating,
  } = book;
  return (
    <Link className="mx-auto" to={`books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-5 border-2 mt-5">
        <figure className="bg-blue-400 rounded-2xl py-8">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="space-x-5">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs text-green-300">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div>Page: {totalPages}</div>
          <div className="border-dashed  border-t-2 my-8"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div>{rating}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
