import React, {useState} from 'react';
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

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  console.log(name, password);

  const handleLoginPress = () => {
    console.log(name, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dflex}>
        <Text style={styles.signheading}>Login</Text>
        <Text style={styles.signText}>Add your details to login</Text>
      </View>
      <ScrollView>
        <Input
          placeholder="Name"
          onChangeText={e => {
            setName(e);
          }}
        />
        <Input
          placeholder="Pasword"
          onChangeText={e => {
            setPassword(e);
          }}
        />
        <Button login="login" onPress={handleLoginPress} />
        <View style={styles.dflex}>
          <Text style={styles.forgetText}>Forgot your password?</Text>
          <Text style={styles.forgetText}>or Login With</Text>
        </View>
        <TouchableOpacity style={styles.Facebookbutton}>
          <Text style={styles.FacebookbuttonText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Facebookbutton}>
          <Text style={styles.FacebookbuttonText}>Login with Facebook</Text>
        </TouchableOpacity>
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
});
