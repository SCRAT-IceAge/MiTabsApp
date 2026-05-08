/*
_________________________________________

_________________________________________
*/

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootTabParamList } from '../types/navigation';

import InicioScreen from '../screens/InicioScreen';
import BuscarScreen from '../screens/BuscarScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Inicio': iconName = 'home-outline'; break;
            case 'Buscar': iconName = 'search-outline'; break;
            case 'Perfil': iconName = 'person-outline'; break;
            default: iconName = 'help';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen name="Buscar" component={BuscarScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}