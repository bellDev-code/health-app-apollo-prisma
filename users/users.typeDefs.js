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

  type Query {
    seeProfile(username: String): User
  }
`;
