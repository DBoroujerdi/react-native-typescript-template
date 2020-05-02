import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from '../components/MainScreen';
import SettingsScreen from '../components/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: 'blue',
        inactiveTintColor: 'grey',
      }}>
      <Tab.Screen name={'Main'} component={MainScreen} />
      <Tab.Screen name={'Settings'} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
