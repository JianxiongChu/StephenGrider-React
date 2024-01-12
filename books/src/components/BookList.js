import BookShow from "./BookShow";

const BookList = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow book={book} onDelete={onDelete} />;
  });

  return <div>{renderedBooks}</div>;
};

export default BookList;
