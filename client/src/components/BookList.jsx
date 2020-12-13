import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

const displayBooks = (books) => {
  return books.map((book) => {
    return <li key={book.id}> {book.name}</li>;
  });
};

const BooksList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>{`Loading...`}</p>;
  if (error) return <p>{`Error :(`}</p>;

  return (
    <div id="book-list">
      {data && data.books && <ul>{displayBooks(data.books)}</ul>}
    </div>
  );
};

export default BooksList;
