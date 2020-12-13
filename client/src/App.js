import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App({ client }) {
  return (
    <div id="main">
      <h1>Ramz Library</h1>
      <BookList />
      <AddBook client={client} />
    </div>
  );
}

export default App;
