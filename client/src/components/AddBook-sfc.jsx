import React from "react";
import { useQuery } from "@apollo/client";
import { getAuthorsQuery } from "../queries/queries";

const displayAuthors = (authors) => {
  return authors.map((author) => {
    return <option key={author.id}>{author.name}</option>;
  });
};

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  console.log(data);

  if (loading) return <p>{`Loading...`}</p>;
  if (error) return <p>{`Error :(`}</p>;

  return (
    <form id="add-book">
      <div className="field">
        <label>Book Name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select Author</option>
          {data && data.authors && displayAuthors(data.authors)}
        </select>
      </div>

      <button>{`+`}</button>
    </form>
  );
};

export default AddBook;
