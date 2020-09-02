import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BooksList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(data);
  return (
    <div id="book-list">
      {data && (
        <ul>
          <li> Book 1</li>
        </ul>
      )}
    </div>
  );
};

export default BooksList;
