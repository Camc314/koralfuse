import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native';

import HomeScreen from '../scenes/home/Home';
import LibraryScreen from '../scenes/home/Library';
import PlayScreen from '../scenes/home/Play';
import ItemScreen from '../scenes/home/Item';
import PeopleScreen from '../scenes/home/People';
import SettingsScreen from '../scenes/home/UserSettings';
import AboutScreen from '../scenes/home/UserSettings/About';

export type RootStackParamList = {
  Home: undefined;
  Library: { libraryId: string; libraryName: string; libraryType: string };
  Play: { itemId: string; playFromStart?: boolean };
  Item: { itemId: string };
  People: { personId: string };
  'User Settings': undefined;
  About: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

import { useColorScheme } from 'react-native-appearance';
import { useTranslation } from 'react-i18next';

export default function HomeStack(): JSX.Element {
  const { t } = useTranslation();
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: t('home') }}
        />
        <Stack.Screen
          name="Library"
          component={LibraryScreen}
          options={{ title: t('library') }}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{ title: t('play') }}
        />
        <Stack.Screen
          name="Item"
          component={ItemScreen}
          options={{ title: t('item') }}
        />
        <Stack.Screen
          name="People"
          component={PeopleScreen}
          options={{ title: t('people') }}
        />
        <Stack.Screen
          name="User Settings"
          component={SettingsScreen}
          options={{ title: t('userSettings') }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: t('about') }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
