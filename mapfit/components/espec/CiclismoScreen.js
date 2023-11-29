import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CiclismoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image
          source={require('./assets/img/ciclismo1.jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/ciclismo2.jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/ciclismo3.jpg')}
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
        <Text style={styles.descriptionTitle}>Entenda os benefícios da prática do ciclismo</Text>
        <Text style={styles.descriptionText}>
          Melhora da saúde cardiovascular: O ciclismo é uma excelente forma de exercício cardiovascular, que ajuda a melhorar a saúde do coração, aumentar a resistência cardiovascular e diminuir o risco de doenças cardiovasculares, como doenças cardíacas, pressão alta e derrame.
          
          Fortalecimento muscular: Pedalar envolve o uso de vários grupos musculares, como pernas, glúteos, abdômen e braços, o que ajuda a fortalecer e tonificar o corpo.
          
          Redução do estresse: pedalar ao ar livre pode ajudar a reduzir o estresse e a ansiedade, melhorar o humor e promover a sensação de bem-estar geral.
          
          E muito mais!
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
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default CiclismoScreen;