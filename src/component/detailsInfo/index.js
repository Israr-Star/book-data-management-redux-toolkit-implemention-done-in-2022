import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookDetails, setData } from "../../features/bookSlice";
import "./index.scss";

function DetailsInfo() {
  const dispatch = useDispatch();

  let book;
  book = useSelector(bookDetails);
  console.log(book);

  let authorName;
  let id;

const [inputData, setInputData]=useState([])

  const handleChange = (value, fieldName) => {
    if (fieldName === "authorName") {
      authorName = value;
    } else {
      id = value;
    }
  };

  let array = [];
  const formRef = useRef();
  const onAdd = (e) => {
    e.preventDefault()
    formRef.current.reset();
    console.log(authorName, id);
    let data = {
      id: id,
      name: authorName,
    };

    array.push(data);
    setInputData([...inputData, data])
  };
console.log('data',inputData)

  const onSubmit = (e) => {
  

    let payload = {
      authorData: inputData,
      isNextThird: true,
      isNextSecond: true,
    };
    dispatch(setData(payload));
  };
  const onBack = (e) => {
    e.preventDefault()

    let payload = {
      authorData: inputData,
      isNextSecond: false,
      isNextThird: false,
    };
    dispatch(setData(payload));
  };



  return (
    <div className="o-detailsInfo">
      {!book.isNextThird ? (
      
          <form className="o-detailsInfo__form" ref={formRef}>
          <label>Author Name</label>
          <input
            type="text"
            onChange={(e) => handleChange(e.target.value, "authorName")}
            name="authorName"
         
          />
          <label>Author ID</label>
          <input
            type="text"
            onChange={(e) => handleChange(e.target.value, "authorId")}
            name="authorId"
         
          />
{inputData.map((item)=>{
  return <div>
    <span>Author ID{item.id}</span>
    <br/>
    <span>Author Name{item.name}</span>

  </div>
})}
          <button onClick={onAdd}>Add</button>

          <button onClick={onSubmit}>Next</button>
          <button onClick={onBack}>Back</button>

          </form>
      
      ) : (
        ""
      )}
    </div>
  );
}

export default DetailsInfo;
