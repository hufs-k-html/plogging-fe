import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="플로깅 시작하기" component={Home} />
    </Stack.Navigator>
  );
};

export default App;
