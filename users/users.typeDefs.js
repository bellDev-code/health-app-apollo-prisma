import { gql } from "graphql-tag";

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
`;
