import React from 'react';
import {Text, SafeAreaView} from 'react-native';

function MainScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Main Screen!</Text>
    </SafeAreaView>
  );
}

export default MainScreen;
