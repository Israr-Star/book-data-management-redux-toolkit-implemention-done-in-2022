import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookDetails, setData } from "../../features/bookSlice";
import DisplayBook from "../displayBook";
import "./index.scss";

function SellInfo() {
  const dispatch = useDispatch();

  let book;
  book = useSelector(bookDetails);
  console.log("fromThird", book);

  // const handleChange = (value, fieldName) => {
  //   let payload = {
  //     value: value,
  //     fieldName: fieldName,
  //   };
  //   dispatch(setData(payload));
  // };

  const [bookData, setbookData] = useState({
    book: {
      price: book.price,
      totalNoOfSell: book.noOfSell,
      totalSell: book.totalSell,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setbookData({
      book: {
        ...bookData.book,
        [name]: value,
      },
    });
    console.log(bookData);
  };

  const onSubmit = () => {
    console.log("from submit", bookData.book);
    let payload = {
      bookSellInfo: bookData.book,
      isDisplay: true,
      isNextThird: true,
      isNextSecond: false,
    };
    dispatch(setData(payload));
  };

  const onBack = () => {
    console.log("from submit", bookData.book);
    let payload = {
      bookSellInfo: bookData.book,
      isNextThird: false,
      isDisplay: false,
    };
    dispatch(setData(payload));
  };

  return (
    <div className="o-sellInfo">
      {!book.isDisplay && book.isNextThird ? (
        <div className="o-sellInfo__form">
          <label>Unit Price</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={bookData.book.price}
            name="price"
          />
          <label>Total no of sell</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={bookData.book.totalNoOfSell}
            name="totalNoOfSell"
          />
          <label>Total Sell</label>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            name="totalSell"
            value={bookData.book.totalSell}
          />
          <button onClick={onSubmit}>Next</button>
          <button onClick={onBack}>Back</button>
        </div>
      ) : (
        <DisplayBook />
      )}
    </div>
  );
}

export default SellInfo;
