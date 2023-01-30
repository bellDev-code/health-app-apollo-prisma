import gql from "graphql-tag";

export default gql`
  type Query {
    seeProfile(username: String): User
  }
`;
