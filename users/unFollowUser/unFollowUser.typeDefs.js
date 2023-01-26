import { gql } from "graphql-tag";

export default gql`
  type UnFollowUserResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    unFollowUser(username: String!): UnFollowUserResult!
  }
`;
