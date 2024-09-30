// src/navigation/DrawerNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTabs'; // Este será el componente que incluye el Bottom Navigation
import Modulo from '../components/Modulo'; // Componente Modulo

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
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

export default DrawerNavigator;
