import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BasqueteScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sliderContainer}>
        <Image
          source={require('./assets/img/basquete.jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/basquete2.jpg')}
          style={styles.sliderImage}
        />
        <Image
          source={require('./assets/img/basquete3.jpg')}
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
        <Text style={styles.descriptionTitle}>Entenda os benefícios da prática do basquete</Text>
        <Text style={styles.descriptionText}>
          Desenvolvimento do condicionamento físico: O basquete é um esporte dinâmico que envolve corridas, saltos, arremessos e movimentos rápidos, o que contribui para o desenvolvimento do condicionamento cardiovascular, força muscular, resistência e agilidade.
          
          Melhoria das habilidades técnicas: O basquete requer habilidades técnicas específicas, como dribles, passes, arremessos e defesa, o que pode ajudar a aprimorar a coordenação motora, a precisão e a habilidade com a bola.
          
          Desenvolvimento da agilidade mental: O basquete é um esporte que requer tomadas rápidas de decisões, leitura do jogo e estratégias, o que pode contribuir para o desenvolvimento da agilidade mental, pensamento estratégico e habilidades cognitivas.
          
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default BasqueteScreen;