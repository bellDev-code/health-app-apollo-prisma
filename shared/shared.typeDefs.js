import gql from "graphql-tag";

export default gql`
  type MutationResponse {
    ok: Boolean!
    error: String
  }
`;
