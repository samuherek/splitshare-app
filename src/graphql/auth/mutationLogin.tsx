import { gql } from 'apollo-boost';
import { useMutation } from '../../hooks/useMutation';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

type Options = {
  email: string;
  password: string;
};

function useLoginMutation({ email, password }: Options) {
  const [mutation, state] = useMutation(LOGIN_MUTATION, {
    variables: {
      email,
      password,
    },
  });

  return [mutation, state];
}

export { LOGIN_MUTATION, useLoginMutation };
