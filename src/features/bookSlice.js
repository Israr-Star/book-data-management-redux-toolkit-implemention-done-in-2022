import { createSlice } from "@reduxjs/toolkit";
let array = [];
export const bookSlice = createSlice({
  name: "book",
  initialState: {
    name: null,
    ICBN: null,
    writterName: null,
    authors: [
      {
        id: null,
        name: null,
      },
    ],
    price: null,
    noOfSell: null,
    totalSell: null,
    isNextSecond: false,
    isNextThird: false,
    isDisplay: false,
  },
  reducers: {

    setData: (state, action) => {
      if (action.payload.bookInfo) {
        state.name = action.payload.bookInfo.name;
        state.ICBN = action.payload.bookInfo.isbn;
        state.writterName = action.payload.bookInfo.writerName;
        state.isNextSecond = action.payload.isNextSecond;
      }
      if (action.payload.authorData) {
        console.log(action.payload.authorData);
        state.authors = action.payload.authorData;

        state.isNextThird = action.payload.isNextThird;
        state.isNextSecond = action.payload.isNextSecond;
 
        array = state.authors;
      }
      if (action.payload.bookSellInfo) {
        state.price = action.payload.bookSellInfo.price;
        state.noOfSell = action.payload.bookSellInfo.totalNoOfSell;
        state.totalSell = action.payload.bookSellInfo.totalSell;
        state.isNextThird = action.payload.isNextThird;
        state.isDisplay = action.payload.isDisplay;
      }
   
    },
  },
});

export const { setData } = bookSlice.actions;

export const bookDetails = (state) => {
  console.log(array);

  return {
    name: state.book.name,
    icbn: state.book.ICBN,
    writterName: state.book.writterName,
    authors: array,
    price: state.book.price,
    totalSell: state.book.totalSell,
    noOfSell: state.book.noOfSell,
    isNextSecond: state.book.isNextSecond,
    isNextThird: state.book.isNextThird,
    isDisplay: state.book.isDisplay,
  };
};

export default bookSlice.reducer;
