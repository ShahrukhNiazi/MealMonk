import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpPress = () => {
    console.log(name, email, mobile, address, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dflex}>
        <Text style={styles.signheading}>Sign Up</Text>
        <Text style={styles.signText}>Add your details to sign up</Text>
      </View>
      <ScrollView>
        <Input
          placeholder="Name"
          onChangeText={e => {
            setName(e);
          }}
        />
        <Input
          placeholder="Email"
          onChangeText={e => {
            setEmail(e);
          }}
        />
        <Input
          placeholder="Mobile No"
          onChangeText={e => {
            setMobile(e);
          }}
        />
        <Input
          placeholder="Address"
          onChangeText={e => {
            setAddress(e);
          }}
        />
        <Input
          placeholder="Password"
          onChangeText={e => {
            setPassword(e);
          }}
        />
        <Input placeholder="Confirm Password" />
        <Button login="login" color="#FC6011" onPress={handleSignUpPress} />
        <View style={styles.accountText}>
          <Text>Already have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.accountLoginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

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
});
