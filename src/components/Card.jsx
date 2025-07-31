function Card(data) {
  return (
    <div>
      <ul>
        {data.books.map((book) => (
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
                  {book.language} | {book.pages} pages{" "}
                </div>
              </div>
            </div>
            <div>like</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
