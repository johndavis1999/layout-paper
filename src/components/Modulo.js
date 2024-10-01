import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const Modulo = () => {
  const [message, setMessage] = useState(null); // Para almacenar el mensaje de la API
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://capacitaciones.app.edusnapec.com/api');
        setMessage(response.data.message); // Guardar el mensaje en el estado
      } catch (err) {
        setError(err.message); // Guardar el error en el estado
      } finally {
        setLoading(false); // Finalizar la carga
      }
    };

    fetchData(); // Llamar a la función para obtener datos
  }, []); // Ejecutar solo al montar el componente

  // Mostrar indicador de carga
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Mostrar error si existe
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  // Mostrar el mensaje de la API
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Módulo</Text>
      <Text style={styles.message}>{message}</Text>
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
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default Modulo;
