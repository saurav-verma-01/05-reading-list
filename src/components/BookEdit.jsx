import { useState } from "react";

const BookEdit = ({ book, onSave }) => {
  const [title, setTitle] = useState(book.title);

  const handleTitleEdit = (e) => {
    setTitle(e.target.value);
  };

  const submitTitleEdit = (e) => {
    e.preventDefault();
    onSave(title, book.id);
  };
  return (
    <form
      className="flex flex-col gap-2  items-start"
      onSubmit={submitTitleEdit}
    >
      <input
        type="text"
        className="px-4 py-2 rounded-md border-none outline-none text-green-900"
        value={title}
        onChange={handleTitleEdit}
      />
      <button
        type="submit"
        className="px-4 rounded-md py-1 border-2 border-green-50 hover:bg-lime-700 transition-all duration-500"
      >
        Save
      </button>
    </form>
  );
};

export default BookEdit;
