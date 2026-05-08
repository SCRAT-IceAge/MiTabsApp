/* Actualiz navegador principal: Ahora pestaa inicio no apunta a inicioScreen, sino a HomeStackNavigator */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootTabParamList, HomeStackParamList } from '../types/navigation';

import ListaScreen from '../screens/HomeStack/ListaScreen';
import DetalleScreen from '../screens/HomeStack/DetalleScreen';
import BuscarScreen from '../screens/BuscarScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Lista" component={ListaScreen} />
      <Stack.Screen name="Detalle" component={DetalleScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          switch (route.name) {
            case 'Inicio': iconName = focused ? 'home' : 'home-outline'; break;
            case 'Buscar': iconName = focused ? 'search' : 'search-outline'; break;
            case 'Perfil': iconName = focused ? 'person' : 'person-outline'; break;
            default:       iconName = 'help';
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeStackNavigator} />
      <Tab.Screen name="Buscar" component={BuscarScreen} options={{ tabBarBadge: 5 }} />
      <Tab.Screen name="Perfil" component={PerfilScreen} options={{ tabBarLabel: 'Mi cuenta' }} />
    </Tab.Navigator>
  );
}