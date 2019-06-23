import React from 'react';
import useForceUpdate from 'use-force-update';
// import { auth } from '../auth/auth';
// import { RobinsPortfolio } from '../generated/types';
import { useMeQuery } from '../graphql/user/queryMe';
import { View, ActivityIndicator, StatusBar, Text } from 'react-native';
// import console = require('console');
// import console = require('console');
// import console = require('console');

type AuthContext = {
  attemptFinished: boolean;
  me: Object;
  error: Error | null;
  // portfolio: RobinsPortfolio;
  // portfolioKey: string | null;
  // login: (key: string) => void;
  // register: (key: string) => void;
  // logout: () => void;
};

// @ts-ignore
const AuthContext = React.createContext<AuthContext | undefined>();

function AuthProvider(props: any) {
  const [firstAttemptFinished, setFirstAttemptFinished] = React.useState(false);
  const { data, loading, error } = useMeQuery();

  // console.log(firstAttemptFinished, data, loading, error);

  const forceUpdate = useForceUpdate();

  React.useLayoutEffect(() => {
    if (!loading && !error && data.me) {
      setFirstAttemptFinished(true);
    }
  }, [data]);

  // if (!firstAttemptFinished) {
  //   if (loading) {
  //     return (
  //       <View>
  //         <ActivityIndicator />
  //         <StatusBar barStyle="default" />
  //       </View>
  //     );
  //   }
  // }

  // if (error) {
  //   console.log(error);
  //   return (
  //     <View>
  //       <Text>{error.message} -> something bad happened</Text>
  //     </View>
  //   );
  // }

  // const portfolioKey = auth.getPortfolioKey();
  // const login = (key: string) => auth.login(key).then(forceUpdate);
  // const logout = () => auth.logout().then(forceUpdate);
  // const register = (key: string) => auth.register(key).then(forceUpdate);

  return (
    <AuthContext.Provider
      value={{
        attemptFinished: firstAttemptFinished,
        me: data.me,
        error,
        // register, login, logout
      }}
      {...props}
    />
  );
}

function useAuth() {
  const context = React.useContext<AuthContext>(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
