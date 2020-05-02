import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import MainTabNavigator from './src/navigation/MainTabNavigator';

const App = () => {
  /** context wrappers go here.. */

  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default App;
