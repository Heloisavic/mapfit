import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MusculacaoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image
          source={require('./assets/img/academia (1).jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/academia (2).jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/academia (3).jpg')}
          style={styles.sliderImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações Complementares</Text>
        <View style={styles.infoDetails}>
          <Text>
            <Text style={styles.infoLabel}>Horário: </Text>6h às 21h
          </Text>
          <Text>
            <Text style={styles.infoLabel}>Acompanhamento Profissional: </Text>Necessário
          </Text>
          <Text>
            <Text style={styles.infoLabel}>Tópico: </Text>Saúde e Bem-estar
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Entenda os benefícios da prática da musculação</Text>
          <Text style={styles.descriptionText}>
            Melhora da saúde cardiovascular: A academia é uma excelente forma de exercício cardiovascular, que ajuda a melhorar a saúde do coração, aumentar a resistência cardiovascular e diminuir o risco de doenças cardiovasculares, como doenças cardíacas, pressão alta e derrame.
            {'\n\n'}
            Fortalecimento muscular: Treinar envolve o uso de vários grupos musculares, como pernas, glúteos, abdômen e braços, o que ajuda a fortalecer e tonificar o corpo.
            {'\n\n'}
            Redução do estresse: Treinar pode ajudar a reduzir o estresse e a ansiedade, melhorar o humor e promover a sensação de bem-estar geral.
            {'\n\n'}
            E muito mais!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sliderContainer: {
    height: 200,
    marginBottom: 20,
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoDetails: {
    marginBottom: 20,
  },
  infoLabel: {
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#888',
  },
});

export default MusculacaoScreen;