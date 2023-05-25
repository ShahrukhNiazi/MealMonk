// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login,SignUp,Newpassword,OtpScreens} from '../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Newpassword" component={Newpassword} />
      <Stack.Screen name="OtpScreens" component={OtpScreens} />
     </Stack.Navigator>
  );
};

export default AuthNavigator;
