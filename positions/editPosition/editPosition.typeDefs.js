import gql from "graphql-tag";

export default gql`
  type Mutation {
    editPosition(
      latitude: String!
      longitude: String!
      gymname: String
      gymTime: String!
    ): MutationResponse!
  }
`;
