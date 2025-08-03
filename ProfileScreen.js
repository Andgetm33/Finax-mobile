import React from 'react';
import { View, Text } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold' }}>Profil d'investisseur</Text>
      <Text>Niveau de risque : Moyen</Text>
    </View>
  );
}