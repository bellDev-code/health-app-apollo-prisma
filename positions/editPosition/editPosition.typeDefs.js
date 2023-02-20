import gql from "graphql-tag";

export default gql`
  type Mutation {
    editPosition(
      latitude: Float!
      longitude: Float!
      timestamp: String!
    ): MutationResponse!
  }
`;
