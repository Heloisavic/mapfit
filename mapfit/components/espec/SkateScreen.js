import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SkateScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image
          source={require('./assets/img/skate (1).jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/skate (2).jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/skate (3).jpg')}
          style={styles.sliderImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações Complementares</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Horário:</Text>
          <Text style={styles.infoText}>Livre</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Acompanhamento Profissional:</Text>
          <Text style={styles.infoText}>Não Necessário</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Tópico:</Text>
          <Text style={styles.infoText}>Saúde e Bem-estar</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Entenda os benefícios da prática do skate</Text>
        <Text style={styles.descriptionText}>
          Exercício físico: O skate é uma atividade física completa que envolve coordenação, equilíbrio, força e resistência. Ao andar no skate, trabalhe em diferentes grupos musculares, melhore sua flexibilidade e ajude a manter uma boa condição cardiovascular.
          
          Estimulação mental: O skate é uma atividade que envolve a concentração, a abordagem e a tomada de decisões rápidas. Aprender novos truques, planejar rotas e adaptar-se a diferentes terrenos estimula sua mente e aprimora suas habilidades cognitivas.
          
          Criatividade e expressão pessoal: O skate é uma forma de expressão artística e criativa. Você pode desenvolver seu próprio estilo, inventar novos truques e adaptar seu skate à sua personalidade. Te permite expressar livremente e desenvolver sua própria identidade.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sliderContainer: {
    height: 200,
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  infoText: {
    flex: 1,
  },
  descriptionContainer: {
    marginTop: 20,
  },
  descriptionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default SkateScreen;