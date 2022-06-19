import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query {
    applicantIndividualCompanyPositions {
      data {
        id
        name
      }
    }
  }
`;

export const GET_FILTERED_POSITION = gql`
  query applicantIndividualCompanyPositions {
    applicantIndividualCompanyPositions(
      where: { column: NAME, operator: LIKE, value: "Director" }
    ) {
      data {
        id
        name
      }
    }
  }
`;
