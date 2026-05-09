import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function BuscarScreen() {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscá un personaje..."
        value={texto}
        onChangeText={setTexto}
      />
      <Text style={styles.descripcion}>Acá vas a poder buscar a tu personaje. No lo vas a encontrar, jejeje, pero bueno.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0fdf4', alignItems: 'center', justifyContent: 'center', padding: 24 },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#166534', marginBottom: 24 },
  input: { width: '100%', backgroundColor: '#fff', borderRadius: 12, padding: 14, fontSize: 16, marginBottom: 16, borderWidth: 1, borderColor: '#d1fae5' },
  descripcion: { fontSize: 16, color: '#4b5563', textAlign: 'center' },
});