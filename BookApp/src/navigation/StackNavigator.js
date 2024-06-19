// Configuración de la navegación de la aplicación utilizando React Navigation
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import BookList from '../screens/BookList';
import BookDetail from '../screens/BookDetail';
import AddBook from '../screens/AddBook';
import EditBook from '../screens/EditBook';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookList" component={BookList} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
        <Stack.Screen name="AddBook" component={AddBook} />
        <Stack.Screen name="EditBook" component={EditBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

