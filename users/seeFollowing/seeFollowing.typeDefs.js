import gql from "graphql-tag";

export default gql`
  type SeeFollowersResult {
    ok: Boolean!
    error: String
    followings: [User]
  }
  type Query {
    seeFollowing(username: String!, page: Int!): SeeFollowersResult!
  }
`;
