import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEditSave }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    onDelete(book.id);
  };

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleEditSave = (newTitle, id) => {
    onEditSave(newTitle, id);
    setShowEdit(false);
  };

  let bookContent = <h1>{book.title}</h1>;

  if (showEdit) {
    bookContent = <BookEdit book={book} onSave={handleEditSave} />;
  }
  return (
    <div className="  bg-lime-600 py-2 px-4 pr-32 text-lime-100 font-medium text-xl rounded-md  relative min-h-32">
      <img src={book.img} />
      {bookContent}

      <button
        className="bg-blue-800 py-1 px-2 text-sm hover:bg-sky-600 transition-all duration-500 border-none active:bg-yellow-300 absolute right-4 top-3 rounded-sm w-20"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="bg-fuchsia-800 py-1 px-2 text-sm hover:bg-violet-600 transition-all duration-500 border-none active:bg-yellow-300 absolute right-4 top-12 w-20 rounded-sm"
        onClick={handleEdit}
      >
        Edit
      </button>
    </div>
  );
};

export default BookShow;
