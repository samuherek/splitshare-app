import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is login</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
