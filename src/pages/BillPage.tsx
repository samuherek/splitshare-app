import React from 'react';
import { View, Text } from 'react-native';
// import console = require('console');

function BillPage() {
  return (
    <View>
      <Text>Bill page</Text>
    </View>
  );
}

// @ts-ignore
BillPage.navigationOptions = {
  drawerLabel: 'Bill',
};

export default BillPage;
