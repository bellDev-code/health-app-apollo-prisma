import { gql } from "graphql-tag";

export default gql`
  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String
      password: String!
    ): User
  }
`;
