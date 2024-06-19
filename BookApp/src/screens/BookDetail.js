//Pantalla que muestra los detalles de un libro específico.
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';

const BookDetail = ({ route, navigation }) => {
  const { bookId } = route.params;
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:3000/api/books/${bookId}`);
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!book) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground source={require('../../images/Librarybackground.png')} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>Author: {book.author}</Text>
        <Text style={styles.publishedDate}>Published Date: {book.publishedDate}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.editButton]} onPress={() => navigation.navigate('EditBook', { book })}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={async () => {
            await axios.delete(`http://10.0.2.2:3000/api/books/${bookId}`);
            navigation.navigate('BookList');
          }}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', 
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#131313'
  },
  author: {
    fontSize: 18,
    color: '#ddd', 
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#131313',
  },
  publishedDate: {
    fontSize: 16,
    color: '#bbb', 
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#131313',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
    margin: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
  },
  deleteButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default BookDetail;

