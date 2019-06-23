import { gql } from 'apollo-boost';
import { useMutation } from '../../hooks/useMutation';

const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

type Options = {
  email: string;
  password: string;
};

function useRegisterMutation({ email, password }: Options) {
  const [mutation, state] = useMutation(REGISTER_MUTATION, {
    variables: {
      email,
      password,
    },
  });

  return [mutation, state];
}

export { REGISTER_MUTATION, useRegisterMutation };
