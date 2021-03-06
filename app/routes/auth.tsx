import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';

import SelectServerScreen from '../scenes/auth/SelectServer';
import LoginScreen from '../scenes/auth/Login';

export type RootStackParamList = {
  'Select Server': undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

import { useColorScheme } from 'react-native-appearance';

export default function AuthStack(): JSX.Element {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Select Server" component={SelectServerScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
