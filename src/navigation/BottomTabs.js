// src/navigation/BottomTabs.js
import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Home from '../components/Home';
import Notifications from '../components/Notifications';
import Settings from '../components/Settings';

function BottomTabs({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Inicio', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'notifications', title: 'Notificaciones', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    { key: 'settings', title: 'Configuración', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
  ]);

  const HomeScreen = () => <Home navigation={navigation} />;
  const NotificationsScreen = () => <Notifications navigation={navigation} />;
  const SettingsScreen = () => <Settings navigation={navigation} />;

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    notifications: NotificationsScreen,
    settings: SettingsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default BottomTabs;
