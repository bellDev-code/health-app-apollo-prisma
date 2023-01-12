import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
require("dotenv").config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT;

server
  .listen()
  .then(() => console.log(`Server is running on http://localhost:${PORT}`));
