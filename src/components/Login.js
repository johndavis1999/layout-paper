import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button } from 'react-native';

const Login = ({ navigation }) => {
  const [form, setForm] = useState({
    identificacion: '',
    password: '',
  });
  const handleLogin = () => {
    // Simulación de autenticación. Aquí va la lógica real de autenticación.
    navigation.navigate('Main'); // Navegamos al MainNavigator, no a Home directamente
  };

  return (
    <SafeAreaView style={{ flex:1, backgroundColor: '#e8ecf4', }}>
      <View style={styles.container}>

        <View style={styles.header} >
          <Image 
            source={require('../../assets/img/logo_horizontal_comprimido.png')} 
            style={styles.headerImg} 
            alt="Logo"
          />
          <Text style={styles.title}>
            ¡Hola! empecemos
          </Text>
          <Text style={styles.subtitle}>
            Inicia sesión para continuar.
          </Text>
        </View>
        
        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Identificación</Text>
            <TextInput 
              style={styles.inputControl}
              value={form.identificacion}
              placeholder='Identificación'
              placeholderTextColor="#6b7280"
              onChange={identificacion => setForm({ ...form, identificacion })}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Contraseña</Text>
            <TextInput 
              style={styles.inputControl}
              value={form.password}
              placeholder='*******'
              placeholderTextColor="#6b7280"
              onChange={password => setForm({ ...form, password })}
            />
          </View>
          <View style={styles.formAction}>
            <Button style={{ backgroundColor: '#075eec', }} title="Ingresar" onPress={handleLogin} />
            <TouchableOpacity
              style={{ marginTop: 'auto' }}
              onPress={() =>{
                Alert.alert('Acceso Denegado')
              }}
            >
              <Text style={styles.formFooter}>
                Recuperar 
                <Text style={{ textDecorationLine: 'underline' }}> contraseña</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  header: {
    marginVertical: 36
  },
  headerImg: {
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1e1e1e',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  input:{
    marginBottom: 8,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075eec',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
});


export default Login;
