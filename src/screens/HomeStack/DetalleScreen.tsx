import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types/navigation';

type Props = NativeStackScreenProps<HomeStackParamList, 'Detalle'>;

const detalles: Record<number, { nombre: string; descripcion: string; imagen: any }> = {
  1: { nombre: 'Jim Halpert', descripcion: 'Vendedor de Dunder Mifflin. Conocido por sus bromas a Dwight y su romance con Pam.', imagen: require('../../../assets/jimlista.jpg') },
  2: { nombre: 'Pam Beesly', descripcion: 'Recepcionista de Dunder Mifflin. Artista y mejor amiga de Jim.', imagen: require('../../../assets/pamlista.jpg') },
  3: { nombre: 'Michael Scott', descripcion: 'Gerente regional de Dunder Mifflin Scranton. Cree ser el mejor jefe del mundo.', imagen: require('../../../assets/michaellista.jpg') },
};

export default function DetalleScreen({ route, navigation }: Props) {
  const { id } = route.params;
  const item = detalles[id];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Text style={styles.backTexto}>← Volver</Text>
      </TouchableOpacity>

      <View style={styles.imagenContainer}>
        <Image source={item.imagen} style={styles.imagen} />
      </View>

      <Text style={styles.titulo}>{item.nombre}</Text>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eff6ff', padding: 24, paddingTop: 60 },
  back: { marginBottom: 24 },
  backTexto: { fontSize: 16, color: '#2563eb' },
  imagenContainer: { alignItems: 'center', marginBottom: 20 },
  imagen: { width: 300, height: 300, borderRadius: 100 },
  titulo: { fontSize: 40, fontWeight: 'bold', color: '#1e3a8a', marginBottom: 12, textAlign: 'center' },
  descripcion: { fontSize: 30, color: '#374151', textAlign: 'center' },
});