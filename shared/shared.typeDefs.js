import gql from "graphql-tag";

export default gql`
  scalar Upload
  type MutationResponse {
    ok: Boolean!
    error: String
  }
`;
