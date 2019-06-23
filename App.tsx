import React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import client from './src/apollo';
import Navigator from './src/Navigator';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthProvider';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <View style={styles.container}>
          {/* {Platform.OS === 'ios' && <StatusBar barStyle="default" />} */}
          <Navigator />
        </View>
      </AuthProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
