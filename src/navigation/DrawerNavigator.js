// src/navigation/DrawerNavigator.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs'; // Este será el componente que incluye el Bottom Navigation
import Modulo from '../components/Modulo'; // Componente Modulo

const Drawer = createDrawerNavigator();
const logo = require('../../assets/favicon.png'); 

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      {/*
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View> */}
      <Drawer.Screen 
        name="Home" 
        component={BottomTabs} 
        options={{ headerShown: true }} // Mostrar el Drawer
      />
      <Drawer.Screen 
        name="Modulo" 
        component={Modulo} 
        options={{ headerShown: true }} // Encabezado en Modulo si es necesario
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        padding: 16, // Ajusta el padding según necesites
    },
    logo: {
        width: 100, // Ajusta el ancho según necesites
        height: 100, // Ajusta la altura según necesites
    },
});

export default DrawerNavigator;
