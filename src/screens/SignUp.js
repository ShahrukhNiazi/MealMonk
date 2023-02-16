import React from 'react';
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

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dflex}>
        <Text style={styles.signheading}>Sign Up</Text>
        <Text style={styles.signText}>Add your details to sign up</Text>
      </View>
      <ScrollView>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Mobile No" />
        <Input placeholder="Address" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <Button login="login" />
        <View style={styles.accountText}>
          <Text>Already have an Account? </Text>
          <TouchableOpacity>
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
