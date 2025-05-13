import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [favoriteGenre, setFavoriteGenre] = useState('');
  const [ageRange, setAgeRange] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Perfil</Text>

      <TouchableOpacity onPress={pickImage} style={styles.avatarWrapper}>
        {image ? (
          <Image source={{ uri: image }} style={styles.avatar} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Selecionar Foto</Text>
          </View>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#fff"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Gênero favorito (ex: Romance)"
        placeholderTextColor="#fff"
        value={favoriteGenre}
        onChangeText={setFavoriteGenre}
      />

      <TextInput
        style={styles.input}
        placeholder="Faixa etária (ex: 12+)"
        placeholderTextColor="#fff"
        value={ageRange}
        onChangeText={setAgeRange}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A67C52',
    padding: 20,
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  avatarWrapper: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#fff',
  },
  placeholder: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#C7A17A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#fff',
    fontSize: 12,
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
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
