/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import PostScreen from './screens/PostScreen';
import {StackNavigatorType} from './navigation';
import PostDetailScreen from './screens/PostDetailScreen';

const StackNavigator = createNativeStackNavigator<StackNavigatorType>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="Login" component={LoginScreen} />
        <StackNavigator.Screen name="Post" component={PostScreen} />
        <StackNavigator.Screen name="PostDetail" component={PostDetailScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default App;
