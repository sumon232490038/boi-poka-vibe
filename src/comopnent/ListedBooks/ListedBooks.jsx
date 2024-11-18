import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getDataFromLC } from "../../../public/addToDB.JS";
import Book from "../Book/Book";

const ListedBooks = () => {
  const dataLoad = useLoaderData();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const LcData = getDataFromLC();
    // console.log(LcData);
    const makeInt = LcData.map((id) => parseInt(id));
    const DataFind = dataLoad.filter((dataLoad) =>
      makeInt.includes(dataLoad.bookId)
    );
    setBooks(DataFind);
  }, []);

  console.log(books);
  return (
    <div className="mb-20">
      <Tabs>
        <TabList>
          <Tab>Wishlist Books</Tab>
          <Tab>Read Books</Tab>
        </TabList>

        <TabPanel>
          <div className=" mx-auto">
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
