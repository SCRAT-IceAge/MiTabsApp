import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inicio</Text>
      <Text style={styles.descripcion}>Acá vas a ver el contenido principal.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eff6ff', alignItems: 'center', justifyContent: 'center', padding: 24 },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#1e3a8a', marginBottom: 12 },
  descripcion: { fontSize: 16, color: '#4b5563', textAlign: 'center' },
});