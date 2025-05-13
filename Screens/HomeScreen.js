import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import booksData from '../assets/books.json';

const imageMap = {
  "Livro1.jpg": require('../assets/Livro1.jpg'),
  "Livro2.jpg": require('../assets/Livro2.jpg'),
  "Livro3.jpg": require('../assets/Livro3.jpg'),
  "Livro4.jpg": require('../assets/Livro4.jpg'),
  "Livro5.jpg": require('../assets/Livro5.jpg'),
  "Livro6.jpg": require('../assets/Livro6.jpg'),
};

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const renderBook = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image
        source={imageMap[item.image]}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.rating}>Ex: Livro ★ {item.rating}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>📚 Livros Populares</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderBook}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A67C52',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#C7A17A',
    borderRadius: 10,
    marginBottom: 20,
    width: '48%',
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 140,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  rating: {
    color: '#fff',
    fontSize: 12,
  },
});
