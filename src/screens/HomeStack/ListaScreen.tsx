/*
Agrego una lista (visto al final de la clase 3, 1:25)
*/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
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
    <ImageBackground
      source={require('../../../assets/steve.jpg')}
      style={styles.background}
    >
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, padding: 24, paddingTop: 60 },
  titulo: { fontSize: 32, fontWeight: 'bold', color: '#fff', marginBottom: 24 },
  item: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, opacity: 0.5 },
  itemTexto: { fontSize: 16, color: '#1e3a8a' },
});