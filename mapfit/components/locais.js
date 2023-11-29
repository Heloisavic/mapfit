import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const MapFit = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>Locais acessíveis e gratuitos em sua cidade.</Text>
      <View style={styles.locationContainer}>
        <TouchableOpacity
          style={styles.locationItem}
          onPress={() => openLink('https://www2.recife.pe.gov.br/servico/esportes-e-lazer')}
        >
          <Image source={require('../assets/img/icon/parque.png')} style={styles.icon} />
          <Text style={styles.locationTitle}>Parques</Text>
          <Text style={styles.locationText}>
            A corrida e a caminhada são, disparadas, as atividades físicas mais praticadas em parques públicos. Mas você também pode pedalar, que é uma ótima opção. Clique e confira mais detalhes.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.locationItem}
          onPress={() => openLink('https://www2.recife.pe.gov.br/pagina/conheca-o-compaz-fabrica-de-cidadania-do-recife#:~:text=Ioga%2C%20Biodan%C3%A7a%2C%20Dan%C3%A7as%20Circulares%2C,defici%C3%AAncia%20e%20Academia%20da%20Cidade.')}
        >
          <Image source={require('../assets/img/icon/localizacao.png')} style={styles.icon} />
          <Text style={styles.locationTitle}>COMPAZ</Text>
          <Text style={styles.locationText}>
            O COMPAZ conta com 18 modalidades esportivas, dentre elas: Taekwondo, Tênis, e Handebol. Clique e confira mais detalhes.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.locationItem}
          onPress={() => openLink('https://www2.recife.pe.gov.br/servico/academia-recife?op=MTM1')}
        >
          <Image source={require('../assets/img/icon/praca.png')} style={styles.icon} />
          <Text style={styles.locationTitle}>Academias da Cidade</Text>
          <Text style={styles.locationText}>
            Estão espalhadas pela cidade para você conseguir fazer musculação com acompanhamento de um profissional gratuitamente! Clique e confira mais detalhes.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  description: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  locationContainer: {
    width: '100%',
  },
  locationItem: {
    marginBottom: 16,
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  locationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MapFit;
