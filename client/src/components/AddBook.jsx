import React, { Component } from "react";
import { useQuery, graphql, Query, ApolloConsumer } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      authors: [],
    };
  }

  componentDidMount = async () => {
    const { client } = this.props;
    const { data, loading, error } = await client.query({
      query: getAuthorsQuery,
    });
    const { authors } = data;
    this.setState({ authors });
  };

  displayAuthors = (authors) => {
    return authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    console.log(this.state.book);
  };

  formItemChange = (event) => {
    event.preventDefault();

    if (
      event.target.name === "name" ||
      event.target.name === "genre" ||
      event.target.name === "authorId"
    ) {
      const book = this.state.book;
      book[event.target.name] = event.target.value;
      this.setState(book);
    }
  };

  render() {
    return (
      // <ApolloConsumer>
      //   {(client) => (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" name="name" onChange={this.formItemChange} />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" name="genre" onChange={this.formItemChange} />
        </div>

        <div className="field">
          <label>Author:</label>
          <select name="authorId" onChange={this.formItemChange}>
            <option>Select Author</option>
            {this.state.authors && this.displayAuthors(this.state.authors)}
          </select>
        </div>

        <button>{`+`}</button>
      </form>
      //   )}
      // </ApolloConsumer>
    );
  }
}

export default AddBook;
