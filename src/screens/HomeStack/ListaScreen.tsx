/*
Agrego una lista (visto al final de la clase 3, 1:25)
*/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParamList, 'Lista'>;

const items = [
  { id: 1, nombre: 'Item 1' },
  { id: 2, nombre: 'Item 2' },
  { id: 3, nombre: 'Item 3' },
];

export default function ListaScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista</Text>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => navigation.navigate('Detalle', { id: item.id })}
        >
          <Text style={styles.itemTexto}>{item.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eff6ff', padding: 24, paddingTop: 60 },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#1e3a8a', marginBottom: 24 },
  item: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12 },
  itemTexto: { fontSize: 16, color: '#1e3a8a' },
});