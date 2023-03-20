import { gql } from "graphql-tag";

export default gql`
  type Mutation {
    editProfile(
      username: String
      email: String
      name: String
      profileImage: Upload
      password: String
    ): MutationResponse!
  }
`;
