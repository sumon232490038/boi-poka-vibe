import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataFromLC } from "../../../public/addToDB.JS";
import Book from "../Book/Book";

const ListedBooks = () => {
  const dataLoad = useLoaderData();
  const [books, setBooks] = useState([]);
  const [sort, setSort] = useState("");
  useEffect(() => {
    const LcData = getDataFromLC();
    // console.log(LcData);
    const makeInt = LcData.map((id) => parseInt(id));
    const DataFind = dataLoad.filter((dataLoad) =>
      makeInt.includes(dataLoad.bookId)
    );
    setBooks(DataFind);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "Rating") {
      const makeSorting = [...books].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setBooks(makeSorting);
    }
    if (ortType === "NO. of page") {
      const makeSorting1 = [...books].sort((a, b) => a.rating - b.rating);
      setBooks(makeSorting1);
    }
  };
  return (
    <div className="mb-20">
      <div class="dropdown dropdown-bottom">
        <div tabindex="0" role="button" class="btn m-1">
          {sort ? `Sort by:${sort}` : "No.of page"}
        </div>
        <ul
          tabindex="0"
          class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <a onClick={() => handleSort("Rating")}>Rating</a>
          </li>
          <li>
            <a onClick={() => handleSort("No. of page")}>No. of Page</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Wishlist Books</Tab>
          <Tab>Read Books</Tab>
        </TabList>

        <TabPanel>
          <div className=" mx-auto grid grid-cols-3 gap-5">
            {books.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
