import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const CreateBook = (title) => {
    console.log("Need to add book titled ", title);
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 100), title: title },
    ];

    setBooks(updatedBooks);
  };

  const DeleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
    <div>
      <BookList books={books} onDelete={DeleteBookById} />
      <BookCreate onCreate={CreateBook} />
    </div>
  );
};

export default App;
