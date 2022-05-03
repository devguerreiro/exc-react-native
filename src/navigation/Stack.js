import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import A from '../views/A';
import B from '../views/B';
import C from '../views/C';

const Stack = createNativeStackNavigator();

export default props => (
  <Stack.Navigator
    initialRouteName="A"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="A"
      component={A}
      options={{
        title: 'Tela A',
      }}
    />
    <Stack.Screen name="B" component={B} />
    <Stack.Screen name="C" component={C} />
  </Stack.Navigator>
);
