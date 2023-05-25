import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#ccc',
    marginTop: 20,
    opacity: 0.7,
  },
});
