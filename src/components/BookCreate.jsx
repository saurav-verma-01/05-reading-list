import { useState } from "react";

const BookCreate = ({ onAddBook }) => {
  const [title, setTitle] = useState("");

  const handleAddBook = (event) => {
    event.preventDefault();

    const uniqueID = Math.floor(Math.random() * 99999);
    const newBook = {
      id: uniqueID,
      title: title,
      img: `https://picsum.photos/seed/${uniqueID}/300/200`,
    };
    onAddBook(newBook);

    setTitle("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="bg-green-800 text-lime-100 absolute w-full h-[120px] bottom-0 p-8">
      <form className="flex gap-4" onSubmit={handleAddBook}>
        <div className="border-2 border-green-600 w-max p-2 px-4 rounded-md flex gap-2 items-center  transition-all duration-500 hover:border-yellow-300 focus-within:border-yellow-300">
          <label className="text-xl uppercase">Title</label>
          <input
            type="text"
            className="py-2 text-lg px-4 rounded-md outline-none border-none text-green-900 font-bold"
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <button
          className="p-2 px-8 border-2 border-green-200 rounded-md outline-none bg-cyan-600 text-cyan-100 font-bold transition-all duration-500 hover:bg-cyan-700 hover:border-yellow-300"
          type="submit"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
