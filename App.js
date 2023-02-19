/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from './src/components';
import AppContainer from './src/navigation';
import {Login, SignUp} from './src/screens';

const App = () => {
  return <AppContainer />;
};

export default App;
