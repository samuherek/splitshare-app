import React from 'react';
import { View, Text, Button } from 'react-native';
// import console = require('console');
// import GradientHeader from 'react-native-gradient-header';

const data = [
  {
    title: 'Awesome stuff',
    content:
      'Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit.',
  },
  {
    title: 'Awesome stuff 2',
    content:
      'Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit.',
  },
  {
    title: 'Awesome stuff 3',
    content:
      'Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit. Lorem ipsum all the shit.',
  },
];

function HomePage(props) {
  return (
    <View>
      {/* <GradientHeader /> */}
      <Button
        title="New Bill?"
        onPress={() => {
          props.navigation.navigate('NewBill');
        }}
      />
      {data.map(d => (
        <View key={d.title}>
          <Text>{d.title}</Text>
          <Button
            title={d.title}
            onPress={() => {
              props.navigation.navigate('Bill', {
                title: d.title,
              });
            }}
          />
        </View>
      ))}
      <Text>Yes!!!</Text>
    </View>
  );
}

// HomePage.navigationOptions = {
//   title: 'Dashboard',
// };

export default HomePage;
