import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const EsportesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esportes</Text>
      <Text style={styles.description}>Confira o que praticar:</Text>
      {/* Adicione os componentes e estilos do React Native aqui */}
      <Image source={require('./assets/img/portfolio/portfolio-1.jpeg')} style={styles.image} />
      <View style={styles.portfolioInfo}>
        <Text style={styles.portfolioTitle}>Ciclismo</Text>
        <Text style={styles.portfolioDescription}>Pedale para uma vida mais saudável e ativa!</Text>
        {/* Adicione o link para mais detalhes */}
      </View>
      {/* Repita os blocos anteriores para cada esporte */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  portfolioInfo: {
    marginBottom: 16,
  },
  portfolioTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  portfolioDescription: {
    fontSize: 16,
  },
});

export default EsportesScreen;