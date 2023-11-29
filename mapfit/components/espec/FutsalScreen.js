import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FutsalScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image
          source={require('./assets/img/fut1.jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/fut2.jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/fut3.jpg')}
          style={styles.sliderImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações Complementares</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Horário:</Text>
          <Text style={styles.infoText}>5h às 22h</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Acompanhamento Profissional:</Text>
          <Text style={styles.infoText}>Necessário</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Tópico:</Text>
          <Text style={styles.infoText}>Saúde e Bem-estar</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Entenda os benefícios da prática do futsal</Text>
        <Text style={styles.descriptionText}>
          Melhora do condicionamento físico: O futsal é uma atividade intensa que envolve corrida, dribles, passes e chutes, o que contribui para o desenvolvimento do condicionamento físico, incluindo resistência cardiovascular, força muscular e agilidade.
          
          Desenvolvimento das habilidades técnicas: O futsal é uma modalidade que exige habilidades técnicas específicas, como controle de bola, passes precisos, dribles e finalizações, o que pode ajudar a aprimorar a técnica e a habilidade com a bola.
          
          Melhoria da coordenação motora: A prática do futsal envolve movimentos complexos que exigem coordenação motora fina e grossa, o que pode contribuir para o desenvolvimento da coordenação motora e do equilíbrio.
          
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

export default FutsalScreen;