import gql from "graphql-tag";

export default gql`
  type Position {
    id: Int!
    latitude: Float!
    longitude: Float!
    timestamp: String!
    updatedAt: String!
    user: [User]
  }
`;
