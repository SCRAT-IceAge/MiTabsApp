import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inicio</Text>
      <Text style={styles.descripcion}>Bienvenido a MiAppTabs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  descripcion: {
    fontSize: 16,
    color: '#4b5563',
  },
});