import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './components/containers/pg_search'
import Result from './components/containers/pg_result';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Hiling.id" component={Search}/>
        <Stack.Screen name="Result" component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
