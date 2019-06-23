import React from 'react';
import get from 'lodash.get';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useRegisterMutation } from '../graphql/auth/mutationRegister';

function RegisterPage(props) {
  const [state, setState] = React.useState({ email: '', password: '' });
  // @ts-ignore
  const [register, { loading, error }] = useRegisterMutation({
    email: state.email,
    password: state.password,
  });

  function handleChange(key) {
    return value => {
      setState({ ...state, [key]: value });
    };
  }

  async function handleSubmit() {
    if (state.email && state.password) {
      // @ts-ignore
      const res = await register();
      if (get(res, 'data.register', false)) {
        props.navigation.navigate('App');
      }
      console.log(':::::::::::::::RES', res);
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <View style={{ paddingLeft: 25, paddingRight: 25 }}>
        <View style={{ marginBottom: 25 }}>
          {error ? <Text>{error.message}</Text> : null}
          <View style={{ marginBottom: 25 }}>
            {/* <Text style={{ marginBottom: 15 }}>Email:</Text> */}
            <TextInput
              style={style.input}
              onChangeText={handleChange('email')}
              value={state.email}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          <View style={{ marginBottom: 25 }}>
            {/* <Text style={{ marginBottom: 15 }}>Password:</Text> */}
            <TextInput
              style={style.input}
              onChangeText={handleChange('password')}
              value={state.password}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
          <Button disabled={loading} onPress={handleSubmit} title="Register" />
        </View>
        <View>
          <Text style={{ marginBottom: 25, textAlign: 'center' }}>
            I already have an account
          </Text>
          <Button
            disabled={loading}
            title="Login"
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    borderRadius: 4,
    backgroundColor: '#eee',
  },
});

export default RegisterPage;
