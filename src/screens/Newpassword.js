import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Input from '../../src/components/Input';
import Button from '../../src/components/Button';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  console.log(name, password);

  const handleLoginPress = () => {
    console.log(name, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dflex}>
        <Text style={styles.signheading}>Reset Password</Text>
        <Text style={[styles.signText, styles.AccountText]}>Please enter your email to receive a
          link to  create a new password via email</Text>
      </View>
      <ScrollView>
        <Input
          placeholder="Name"
          onChangeText={e => {
            setName(e);
          }}
        />
        <Button login="Send" color="#FC6011" onPress={handleLoginPress} />
      </ScrollView>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  signheading: {
    color: '#4A4B4D',
    fontSize: 30,
  },
  dflex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signText: {
    fontSize: 16,
  },
  signText: {
    color: '#7C7D7E',
    marginTop: 15,
    fontSize: 14,
    marginBottom: 20,
  },
  accountText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    flexDirection: 'row',
    fontSize: 14,
  },
  accountLoginText: {
    color: '#FC6011',
    fontWeight: '700',
    marginLeft: 5,
    fontSize: 14,
  },
  forgetText: {
    marginTop: 40,
    textAlign: 'center',
  },
  Facebookbutton: {
    backgroundColor: '#367FC0',
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 100,
    textAlign: 'center',
    marginTop: 20,
  },
  FacebookbuttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
  Margintop: {
    marginTop: 30,
  },
  AccountText: {
    fontSize: 14,
    textAlign: 'center',
  },
  dColumn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
