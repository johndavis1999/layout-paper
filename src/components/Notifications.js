import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default Notifications;
