import { useState } from "react";
import BookCreate from "./components/BookCreate";

import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const handleTitleSubmit = (newTitle, id) => {
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
    <div className="relative min-h-screen">
      <BookList
        books={books}
        onDelete={deleteBook}
        onEditSave={handleTitleSubmit}
      />
      <BookCreate onAddBook={addBook} />
    </div>
  );
};

export default App;
