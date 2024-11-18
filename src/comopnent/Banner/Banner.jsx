import React from "react";
import bannerImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-4xl">
        <img src={bannerImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-20">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
