import { gql } from "graphql-tag";

export default gql`
  type Mutation {
    unFollowUser(username: String!): MutationResponse!
  }
`;
