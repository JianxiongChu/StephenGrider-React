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

  const editBook = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      } else {
        return book;
      }
    });

    setBooks(updatedBooks);
  };

  return (
    <div>
      <h1>Reading List</h1>
      <BookList books={books} onDelete={DeleteBookById} onEdit={editBook} />
      <BookCreate onCreate={CreateBook} />
    </div>
  );
};

export default App;
