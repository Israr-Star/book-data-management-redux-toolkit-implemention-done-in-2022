import React from "react";
import { useSelector } from "react-redux";
import { bookDetails } from "../../features/bookSlice";
import "./index.scss";

const DisplayBook = () => {
  let book;
  book = useSelector(bookDetails);

  return (
    <div className="o-displayBook ">
      <h1>Details of the Book</h1>
      <span>Book Name: {book.name}</span>
      <span>ISBN: {book.icbn}</span>
      <span>Writer Name: {book.writterName}</span>
      {book.authors.map((item) => {
        return (
          <div>
            <span>Author name: {item.name}</span>
            <br/>
            <span>ID: {item.id}</span>
          </div>
        );
      })}
      <span>Unit Price: {book.price} BDT</span>
      <span>Total Number of Sell: {book.noOfSell}</span>
      <span>Total Sell: {book.totalSell} BDT</span>
    </div>
  );
};

export default DisplayBook;
