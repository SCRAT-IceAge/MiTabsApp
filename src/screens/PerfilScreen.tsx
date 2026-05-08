import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Perfil</Text>
      <View style={styles.tarjeta}>
        <Image
          source={require('../../assets/ryan.jpg')}
          style={styles.imagen}
        />
        <Text style={styles.nombre}>Ryan Howard</Text>
        <Text style={styles.descripcion}>
          Estas en la Lista
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fdf4ff', alignItems: 'center', justifyContent: 'center', padding: 24 },
  titulo: { fontSize: 50, fontWeight: 'bold', color: '#6b21a8', marginBottom: 24 },
  tarjeta: { alignItems: 'center', gap: 12 },
  imagen: { width: 400, height: 400, borderRadius: 100 },
  nombre: { fontSize: 50, fontWeight: 'bold', color: '#3b0764' },
  descripcion: { fontSize: 38, color: '#4b5563', textAlign: 'center' },
});