import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParamList, 'Detalle'>;

const detalles: Record<number, { nombre: string; descripcion: string }> = {
  1: { nombre: 'Item 1', descripcion: 'Descripción del item 1.' },
  2: { nombre: 'Item 2', descripcion: 'Descripción del item 2.' },
  3: { nombre: 'Item 3', descripcion: 'Descripción del item 3.' },
};

export default function DetalleScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const item = detalles[id];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.backTexto}>← Volver</Text>
      </TouchableOpacity>
      <Text style={styles.titulo}>{item.nombre}</Text>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eff6ff', padding: 24, paddingTop: 60 },
  back: { marginBottom: 24 },
  backTexto: { fontSize: 16, color: '#2563eb' },
  titulo: { fontSize: 28, fontWeight: 'bold', color: '#1e3a8a', marginBottom: 12 },
  descripcion: { fontSize: 16, color: '#374151' },
});