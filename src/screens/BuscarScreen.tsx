import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BuscarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar</Text>
      <Text style={styles.descripcion}>Jejeje</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#166534',
  },
  descripcion: {
    fontSize: 16,
    color: '#4b5563',
  },
});