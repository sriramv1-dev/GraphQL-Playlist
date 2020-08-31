const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const { connectionString } = require("./securityConstants");

const app = express();
mongoose.connect(connectionString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to datbase");
});

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Listening to Port 4000");
});
