import { useState } from 'react';
import { useMutation as useHookMutation } from 'react-apollo-hooks';

export function useMutation(
  mutation: any,
  { onCompleted, onError, ...options }: any = {}
) {
  const [loading, setLoading] = useState(false);
  const [called, setCalled] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const mutate = useHookMutation(mutation, options);

  // @ts-ignore
  const handler = async (...args: any) => {
    setLoading(true);
    setCalled(true);
    setError(null);
    setData(null);

    try {
      const { data } = await mutate(...args);

      setData(data as any);

      setLoading(false);

      if (onCompleted) {
        onCompleted(data);
      }

      return { data };
    } catch (e) {
      setLoading(false);
      setError(e);

      if (onError) {
        onError(e);
      }
    }
  };

  return [
    handler,
    {
      loading,
      called,
      error,
      data
    }
  ];
}
