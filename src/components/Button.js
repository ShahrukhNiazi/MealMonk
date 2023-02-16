import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {fafacebook} from '@fortawesome/free-solid-svg-icons/fafacebook';

const Button = ({login, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.buttonLogin}
      activeOpacity={0.8}
      onPress={onPress}>
      <View>
        {/* <FontAwesomeIcon icon={fafacebook} /> */}
        <Text style={styles.buttonLoginText}>{login}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonLogin: {
    backgroundColor: '#FC6011',
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
