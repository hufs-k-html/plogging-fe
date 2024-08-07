import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Ranking from './pages/Ranking';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="플로깅 시작하기">
      <Stack.Screen name="플로깅 시작하기" component={Home} />
      <Stack.Screen name="포인트 랭킹" component={Ranking} />
    </Stack.Navigator>
  );
};

export default App;
