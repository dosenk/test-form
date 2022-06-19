import { gql } from "@apollo/client";

// eslint-disable-next-line import/prefer-default-export
export const GET_COMPANY_RELATIONS = gql`
  query {
    applicantIndividualCompanyRelations {
      data {
        id
        name
      }
    }
  }
`;
