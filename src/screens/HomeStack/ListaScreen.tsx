/*
Agrego una lista (visto al final de la clase 3, 1:25)
*/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParamList, 'Lista'>;

const items = [
  { id: 1, nombre: 'Jim' },
  { id: 2, nombre: 'Pam' },
  { id: 3, nombre: 'Michael' },
];

export default function ListaScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>La Lista....</Text>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => navigation.navigate('Detalle', { id: item.id })}
        >
          {item.id === 1 && (
            <Image
              source={require('../../../assets/jimlista.jpg')}
              style={styles.imagen}
            />
          )}
                    {item.id === 2 && (
            <Image
              source={require('../../../assets/pamlista.jpg')}
              style={styles.imagen}
            />
          )}
                    {item.id === 3 && (
            <Image
              source={require('../../../assets/michaellista.jpg')}
              style={styles.imagen}
            />
          )}
          <Text style={styles.itemTexto}>{item.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eff6ff', padding: 24, paddingTop: 60 },
  titulo: { fontSize: 50, fontWeight: 'bold', color: '#1e3a8a', marginBottom: 24 },
  item: { backgroundColor: '#fff', padding: 16, borderRadius: 12, marginBottom: 12, flexDirection: 'row'  },
  itemTexto: { fontSize: 70, color: '#1e3a8a', paddingLeft:20 },
  imagen: { width: 100, height: 100, borderRadius: 4 },
});