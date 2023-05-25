import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

const Button = ({login, onPress, color}) => {
  return (
    <TouchableOpacity
      style={[styles.buttonLogin, {backgroundColor: color}]}
      activeOpacity={0.8}
      onPress={onPress}>
      <View>
        <Text style={styles.buttonLoginText}>{login}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonLogin: {
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 100,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonLoginText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});
