function Card(data) {
  return (
    <div>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            <img src={`/src/assets/${book.image}`} alt="" /> {book.title} -
            {book.author} - {book.language} - {book.pages} pages -
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
