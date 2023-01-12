import { gql } from "apollo-server";

export default gql`
  type User {
    id: Int!
    username: String!
    email: String!
    name: String
    password: String!
    createdAt: String!
    updatedAt: String!
  }

  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String
      password: String!
    ): User
  }

  type Query {
    seeProfile(username: String): User
  }
`;
