import React from 'react';
import { View, Button } from 'react-native';

const Login = ({ navigation }) => {
  const handleLogin = () => {
    // Simulación de autenticación. Aquí va la lógica real de autenticación.
    navigation.navigate('Main'); // Navegamos al MainNavigator, no a Home directamente
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ingresar" onPress={handleLogin} />
    </View>
  );
};

export default Login;
