import { gql } from "graphql-tag";

export default gql`
  type EditProfileResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProfile(
      username: String
      email: String
      name: String
      password: String
    ): EditProfileResult!
  }
`;
