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
          let iconName: string;

          switch (route.name) {
            case 'Inicio': iconName = focused ? 'home' : 'home-outline'; break;
            case 'Buscar': iconName = focused ? 'search' : 'search-outline'; break;
            case 'Perfil': iconName = focused ? 'person' : 'person-outline'; break;
            default: iconName = 'help';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={InicioScreen} />
      <Tab.Screen
        name="Buscar"
        component={BuscarScreen}
        options={{ tabBarBadge: 5 }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: 'Mi cuenta',
        }}
      />
    </Tab.Navigator>
  );
}