import gql from "graphql-tag";

export default gql`
  type Mutation {
    createPosition(latitude: Float!, longitude: Float!): Position
  }
`;
