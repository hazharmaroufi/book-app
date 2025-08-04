import { useState } from "react";

function Card(books) {
  const [favBooks, setFavBooks] = useState([]);
  const favHandler = (id) => {
    const theBook = books.books.find((book) => book.id === id);
    console.log(theBook);
    setFavBooks((prevFavBooks) => [...prevFavBooks, theBook]);

    console.log(favBooks);
  };
  return (
    <div className="cardDiv">
      <div className="main">
        <ul>
          {books.books.map((book) => (
            <li key={book.id} className="book-container">
              <div className="book-data">
                <div>
                  <img src={`/src/assets/${book.image}`} alt="" />
                </div>
                <div className="book_info">
                  <div>
                    <h2>{book.title}</h2>
                  </div>

                  <div> {book.author}</div>

                  <div>
                    {book.language} | {book.pages} pages
                  </div>
                </div>
              </div>
              <div className="like" onClick={() => favHandler(book.id)}>
                like
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar">
        <ul>
          {favBooks.map((book) => (
            <li key={book.id} className="book-container">
              <div className="book-data">
                <div>
                  <img src={`/src/assets/${book.image}`} alt="" />
                </div>
                <div className="book_info">
                  <div>
                    <h2>{book.title}</h2>
                  </div>

                  <div> {book.author}</div>

                  <div>
                    {book.language} | {book.pages} pages
                  </div>
                </div>
              </div>
              <div className="like" onClick={() => favHandler(book.id)}>
                like
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
