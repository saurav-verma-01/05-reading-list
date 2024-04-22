import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEditSave }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[80%]  mx-auto py-10">
      {books.map((book) => (
        <BookShow
          book={book}
          key={book.id}
          onDelete={onDelete}
          onEditSave={onEditSave}
        />
      ))}
    </div>
  );
};

export default BookList;
