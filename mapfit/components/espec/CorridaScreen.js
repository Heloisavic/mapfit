import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CorridaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image
          source={require('./assets/img/corrida.jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/corrida2.jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/corrida3.jpg')}
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
        <Text style={styles.descriptionTitle}>Entenda os benefícios da prática da corrida</Text>
        <Text style={styles.descriptionText}>
          Queima de calorias: A corrida é uma excelente forma de queimar calorias e contribuir para a perda de peso ou manutenção de um peso saudável, ajudando a melhorar a composição corporal.
          
          Melhoria do sistema imunológico: A prática regular de corrida pode fortalecer o sistema imunológico, enfrentar o risco de doenças e sobreviver, além de melhorar a saúde geral do organismo.
          
          Melhoria da saúde óssea: A corrida é uma atividade de impacto que pode contribuir para o fortalecimento dos ossos e prevenir a perda de massa óssea, ajudando na prevenção de doenças como a osteoporose.
          
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

export default CorridaScreen;