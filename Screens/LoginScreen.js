import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/LogoLivroLivreSemFundo.png')} style={styles.logo} resizeMode="contain" />
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#fff"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#fff"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={() => login(email)}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A67C52',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  form: {
    width: '100%',
  },
  input: {
    backgroundColor: '#C7A17A',
    padding: 15,
    borderRadius: 20,
    color: '#fff',
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#006633',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
