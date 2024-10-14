import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookDetails, setData } from "../../features/bookSlice";
import "./index.scss";

function BasicInfo() {
  const dispatch = useDispatch();

  let book;
  book = useSelector(bookDetails);
  console.log(book);

  const [bookData, setbookData] = useState({
    book: {
      name: book.name,
      isbn: book.icbn,
      writerName: book.writterName,
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
      bookInfo: bookData.book,
      isNextSecond: true,
    };
    dispatch(setData(payload));
  };

  return (
    <div className="o-basicInfo">
      {!book.isNextSecond ? (
        <div className="o-basicInfo__form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => handleChange(e)}
            value={bookData.book.name}
          />
          <label>ISBN No</label>
          <input
            type="text"
            name="isbn"
            onChange={(e) => handleChange(e)}
            value={bookData.book.isbn}
          />
          <label>Writter Name</label>
          <input
            type="text"
            name="writerName"
            onChange={(e) => handleChange(e)}
            value={bookData.book.writerName}
          />
          <button onClick={onSubmit}>Next</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BasicInfo;
