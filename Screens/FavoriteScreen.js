import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
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

const genres = ['Todos', 'Fantasia', 'Romance', 'Ficção'];
const ageRanges = ['Todas', '10+', '12+', '18+'];

const FavoriteScreen = () => {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [selectedAge, setSelectedAge] = useState('Todas');

  useEffect(() => {
    setBooks(booksData); // podemos aplicar filtros aqui futuramente
  }, [selectedGenre, selectedAge]);

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
      <Text style={styles.header}>Favoritos</Text>

      <View style={styles.filtersContainer}>
        <FlatList
          data={genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedGenre(item)}
              style={[
                styles.filterButton,
                selectedGenre === item && styles.filterButtonSelected,
              ]}
            >
              <Text style={styles.filterText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <FlatList
          data={ageRanges}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedAge(item)}
              style={[
                styles.filterButton,
                selectedAge === item && styles.filterButtonSelected,
              ]}
            >
              <Text style={styles.filterText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

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

export default FavoriteScreen;

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
    marginBottom: 10,
  },
  filtersContainer: {
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: '#C7A17A',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 10,
  },
  filterButtonSelected: {
    backgroundColor: '#006633',
  },
  filterText: {
    color: '#fff',
    fontWeight: 'bold',
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
