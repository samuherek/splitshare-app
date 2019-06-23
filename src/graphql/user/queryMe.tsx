import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

const ME_QUERY = gql`
  query me {
    me {
      id
      email
      displayName
      photoUrl
    }
  }
`;

function useMeQuery() {
  const query = useQuery(ME_QUERY);
  return query;
}

export { ME_QUERY, useMeQuery };
