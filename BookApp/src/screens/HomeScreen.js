import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../images/Librarybackground.png')} style={styles.background}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BookList')}>
          <Text style={styles.buttonText}>Enter the Library</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', 
  },
  button: {
    backgroundColor: '#1B51C7',
    paddingVertical: 20, 
    paddingHorizontal: 40, 
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;

