// Pantalla para editar un libro existente en la base de datos.
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';

const EditBook = ({ route, navigation }) => {
  const { book } = route.params;
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [publishedDate, setPublishedDate] = useState(book.publishedDate);

  const updateBook = async () => {
    try {
      await axios.put(`http://10.0.2.2:3000/api/books/${book.id}`, { title, author, publishedDate });
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
        <Button title="Update Book" onPress={updateBook} />
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
    color: '#000', 
  },
});

export default EditBook;
