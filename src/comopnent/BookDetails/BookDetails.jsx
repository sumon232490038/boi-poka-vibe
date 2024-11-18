import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addWhshlistDataLC } from "../../../public/addToDB.JS";

const BookDetails = () => {
  const { bookId } = useParams();
  const booksData = useLoaderData();
  const id = parseInt(bookId);
  const book = booksData.find((book) => book.bookId === id);
  const {
    image,
    bookName,
    review,
    author,
    category,
    tags,
    publisher,
    yearOfPublishing,
    rating,
    totalPages,
  } = book;
  // console.log(book);

  // const handleMarkAsRead = (id) => {
  //   console.log(id);
  //   addMarkAsDataLC(id);
  // };

  const handleWhshlist = (id) => {
    // console.log(id);
    addWhshlistDataLC(id);
  };

  return (
    <div className="hero min-h-screen my-10">
      <div className="hero-content flex flex-col lg:flex-row justify-between   ">
        <div className=" flex-1 flex  h-[800px] w-full items-center justify-center bg-blue-200 py-10 rounded-2xl">
          <img
            src={image}
            className=" max-h-[564px] max-w-[425px] rounded-lg object-cover "
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <h1 className="text-xl font-bold mt-6">By: {author}</h1>
          <div className="divider"></div>
          <p>{category}</p>
          <div className="divider"></div>
          <p className="py-6">
            <span className="font-bold">Review:</span>
            {review}
          </p>
          <div className="space-x-5">
            <span className="font-bold">Tag</span>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-200 text-black"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <div className="flex gap-10 my-4">
            <div className="space-y-3">
              <p>Number of Pages:</p>
              <p>Publisher:</p>
              <p>Year of Publishing:</p>
              <p>Rating:</p>
            </div>
            <div className="space-y-3">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="space-x-7">
            <button className="btn btn-outline btn-accent">Mark as Read</button>
            <button
              onClick={() => handleWhshlist(id)}
              className="btn btn-primary"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
