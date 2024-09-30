import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Modulo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Módulo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Modulo;
