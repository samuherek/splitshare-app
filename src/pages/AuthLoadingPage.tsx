import React from 'react';
import { View, ActivityIndicator, StatusBar, AsyncStorage } from 'react-native';
import { useAuth } from '../context/AuthProvider';
// import console = require('console');
// import console = require('console');
// import CookieManager from 'react-native-cookies';

function AuthLoadingPage(props) {
  const { attemptFinished, me, error } = useAuth();

  // async function bootstrapAsync() {
  //   const userToken = await AsyncStorage.getItem('userToken');

  //   // This will switch to the App screen or Auth screen and this loading
  //   // screen will be unmounted and thrown away.
  //   props.navigation.navigate(!userToken ? 'App' : 'Auth');
  // }

  React.useEffect(() => {
    // console.log('again here', attemptFinished, me);

    if (!attemptFinished) {
      return;
    }

    props.navigation.navigate(me ? 'Home' : 'Auth');
  }, [me, attemptFinished]);

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
}

export default AuthLoadingPage;
