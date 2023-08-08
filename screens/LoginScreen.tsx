import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import {StackNavigatorType} from '../navigation';
import {Header} from '../components/Header';
const {width} = Dimensions.get('screen');
type LoginType = NativeStackScreenProps<StackNavigatorType, 'Login'>;
const LoginScreen = ({navigation}: LoginType) => {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernamError] = useState('');
  const [usernameTouch, setUsernamTouch] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordTouch, setPasswordTouch] = useState(false);

  const reset = () => {
    setUsernamError('');
    setPasswordError('');
    setUsernamTouch(false);
    setPasswordTouch(false);
    setPassword('');
    setUsername('');
  };

  const usernameDefault = 'login';
  const passwordDefault = 'password@123';

  const loginHandler = () => {
    if (username === '' && usernameTouch) {
      setUsernamError('Username is required!');
    }
    if (password === '' && passwordTouch) {
      setPasswordError('Password is required!');
    }
    if (usernameDefault === username && passwordDefault === password) {
      Alert.alert('Login Success', 'Login successful.');
      reset();
      return;
    } else {
      Alert.alert('Login Error', 'Login failed.');
      return;
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Header title="Login" />
      </View>
      <View>
        <View>
          <TextInput
            onChangeText={text => setUsername(text)}
            onPressIn={() => setUsernamTouch(true)}
            value={username}
            style={styles.text}
            autoCapitalize={'none'}
          />
        </View>
        {usernameError && (
          <View style={styles.errorContainer}>
            <Text>{usernameError}</Text>
          </View>
        )}
        <View>
          <TextInput
            onChangeText={text => setPassword(text)}
            onPressIn={() => setPasswordTouch(true)}
            value={password}
            style={styles.text}
            autoCapitalize={'none'}
            secureTextEntry
          />
        </View>
        {passwordError && (
          <View style={styles.errorContainer}>
            <Text>{passwordError}</Text>
          </View>
        )}
        <View>
          <Button title="Login" onPress={loginHandler} />
        </View>
        <View>
          <Button
            title="Post Listing"
            onPress={() => navigation.navigate('Post')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  errorContainer: {
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  error: {
    color: 'red',
  },
  text: {
    backgroundColor: 'white',
    width: width - 40,
    height: 40,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default LoginScreen;
