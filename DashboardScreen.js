import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget</Text>
      <Text>Revenus : 3000€</Text>
      <Text>Dépenses : 2500€</Text>
      <Text>Solde mensuel : 500€</Text>

      <Text style={styles.title}>Immobilier</Text>
      <Text>Biens : 1</Text>
      <Text>Rendement brut : 5.4%</Text>

      <Text style={styles.title}>Financier</Text>
      <Text>Valeur portefeuille : 25.000€</Text>
      <Text>Simulation 10 ans : 45%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontWeight: 'bold', fontSize: 18, marginTop: 10 }
});