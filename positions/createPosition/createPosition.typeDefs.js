import gql from "graphql-tag";

export default gql`
  type Mutation {
    createPosition(
      latitude: String!
      longitude: String!
      gymname: String
    ): MutationResponse!
  }
`;
