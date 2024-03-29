import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (formattedError, error) => {
    console.log(error);
    return formattedError;
  },
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const startServer = async () => {
  await server.start();
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        if (process.env.NODE_ENV === "development") {
          console.log(req.body.operationName);
        }
        const authorization = req.headers.authorization;
        if (authorization) {
          const token = authorization;
          const loggedInUser = await getUser(token);
          return {
            loggedInUser,
          };
        }
        return {};
      },
    })
  );

  app.use((err, req, res, next) => {
    if (err) {
      console.error(err);
    }
  });

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Go to the fuxxing Gym!! http://localhost:${PORT}`);
};

startServer();
