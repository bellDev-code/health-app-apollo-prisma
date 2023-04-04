import gql from "graphql-tag";

export default gql`
  type Position {
    id: Int!
    latitude: String!
    longitude: String!
    gymname: String
    gymTime: String
    updatedAt: String!
    user: [User]
  }
`;
