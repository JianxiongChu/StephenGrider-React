import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTitleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
  }

  return (
    <div className="book-create">
      <form onSubmit={handleTitleSubmit}>
        <label>Title</label>
        <input value={title} className="input" onChange={handleTitleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
