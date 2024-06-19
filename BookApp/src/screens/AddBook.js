//Pantalla para agregar un nuevo libro a la base de datos.
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';

const AddBook = ({ route, navigation }) => {
  const { onBookUpdated } = route.params || {};
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');

  const addBook = async () => {
    try {
      await axios.post('http://10.0.2.2:3000/api/books', { title, author, publishedDate });
      if (onBookUpdated) {
        onBookUpdated();
      }
      navigation.navigate('BookList');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground source={require('../../images/Librarybackground.png')} style={styles.background}>
      <View style={styles.overlay}>
        <TextInput 
          placeholder="Title" 
          value={title} 
          onChangeText={setTitle} 
          style={styles.input} 
          placeholderTextColor="#ccc"
        />
        <TextInput 
          placeholder="Author" 
          value={author} 
          onChangeText={setAuthor} 
          style={styles.input} 
          placeholderTextColor="#ccc"
        />
        <TextInput 
          placeholder="Published Date" 
          value={publishedDate} 
          onChangeText={setPublishedDate} 
          style={styles.input} 
          placeholderTextColor="#ccc"
        />
        <Button title="Add Book" onPress={addBook} />
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
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000', // Asegúrate de que el texto sea visible sobre el fondo blanco
  },
});

export default AddBook;

