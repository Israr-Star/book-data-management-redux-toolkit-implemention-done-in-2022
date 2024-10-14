import { useSelector } from "react-redux";
import DetailsInfo from "./component/detailsInfo";
import BasicInfo from "./component/basicInfo";
import { bookDetails } from "./features/bookSlice";
import SellInfo from "./component/selInfo";
function App() {
  let book;
  book = useSelector(bookDetails);
  console.log(book);
  return (
    <div>
      <BasicInfo />
      {book.isNextSecond && <DetailsInfo />}
      {book.isNextThird && <SellInfo />}
    </div>
  );
}

export default App;
