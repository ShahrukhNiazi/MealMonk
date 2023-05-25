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
        <Button login="login" color="#FC6011" onPress={handleLoginPress} />
        <View style={styles.dflex}>
        <TouchableOpacity onPress={() => navigation.navigate('Newpassword')}>
          <Text style={styles.forgetText}>Forgot your password?</Text>
          </TouchableOpacity>
          <Text style={styles.forgetText}>or Login With</Text>
        </View>
        <Button
          login="Login with Facebook"
          color="#DD4B39"
          onPress={() => navigation.navigate('OtpScreens')}
        />
        <View style={styles.Margintop}>
          <View style={styles.dColumn}>
            <View>
              <Text style={styles.Accountinfo}>
                Don't have an Account?
              </Text>
            </View>
            <View>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.orangetxt}>Sign Up</Text>
            </TouchableOpacity>
            </View>
           </View>
        </View>
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
    alignItems:'center',
    justifyContent:'center',
   },
   orangetxt:{
    color:'#FC6011',
    marginLeft:10,
    fontWeight:'600'
   }
});
