import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const VolleyballScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image
          source={require('../assets/img/volei (1).jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('../assets/img/volei (2).jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('../assets/img/volei (3).jpg')}
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
          <Text style={styles.infoText}>Necessário</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Tópico:</Text>
          <Text style={styles.infoText}>Saúde e Bem-estar</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Entenda os benefícios da prática do vôlei</Text>
        <Text style={styles.descriptionText}>
          Melhora do condicionamento físico: O vôlei é um esporte que envolve movimentos intensos, como saltos, corridas, passes e ataques, o que contribui para o desenvolvimento do condicionamento cardiovascular, força muscular e agilidade.
          
          Desenvolvimento das habilidades técnicas: O vôlei exige habilidades técnicas específicas, como toques, saques, bloqueios e levantamentos, o que pode ajudar a aprimorar a técnica e a habilidade com a bola.
          
          Estímulo ao pensamento estratégico: O vôlei é um esporte que requer estratégia, como a escolha de jogadas, posicionamento em quadra e leitura do jogo, o que pode ajudar a desenvolver o pensamento estratégico e a capacidade de tomar decisões táticas durante a partida.
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

export default VolleyballScreen;