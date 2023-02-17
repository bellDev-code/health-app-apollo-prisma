import { gql } from "graphql-tag";

export default gql`
  type Mutation {
    followUser(username: String!): MutationResponse!
  }
`;
