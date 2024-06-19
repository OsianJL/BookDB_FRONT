//Pantalla principal que muestra la lista de todos los libros.
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, Button, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

const BookList = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchBooks();
    }, [])
  );

  return (
    <ImageBackground source={require('../../images/Librarybackground.png')} style={styles.background}>
      <View style={styles.overlay}>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.bookItem} onPress={() => navigation.navigate('BookDetail', { bookId: item.id })}>
              <Text style={styles.bookTitle}>{item.title}</Text>
              <Text style={styles.bookAuthor}>{item.author}</Text>
            </TouchableOpacity>
          )}
        />
        <Button title="Add Book" onPress={() => navigation.navigate('AddBook')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  bookItem: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
  },
});

export default BookList;
