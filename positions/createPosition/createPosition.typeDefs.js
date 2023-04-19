import gql from "graphql-tag";

export default gql`
  scalar Decimal

  type Mutation {
    createPosition(
      latitude: Decimal!
      longitude: Decimal!
      gymname: String
      userId: Int
    ): MutationResponse!
  }
`;
