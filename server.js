import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";
require("dotenv").config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
      protectResolver,
    };
  },
});

const PORT = process.env.PORT;

server
  .listen()
  .then(() => console.log(`Server is running on http://localhost:${PORT}`));
