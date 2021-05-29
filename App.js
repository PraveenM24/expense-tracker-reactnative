import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, RegisterScreen } from './src/screens'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="Login" component={ LoginScreen }/>
        <Stack.Screen name="Registration" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

