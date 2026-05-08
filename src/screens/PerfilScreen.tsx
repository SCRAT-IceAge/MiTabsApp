import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>
      <Text style={styles.descripcion}>Acá vas a ver tu información personal.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6b21a8',
  },
  descripcion: {
    fontSize: 16,
    color: '#4b5563',
  },
});