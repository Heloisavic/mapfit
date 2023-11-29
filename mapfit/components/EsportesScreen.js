import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


const EsportesScreen = ({ navigation }) => {
  const esportes = [
    { nome: 'Ciclismo', imagem: require('../assets/img/portfolio/portfolio-1.jpeg'), rota: 'CiclismoScreen' },
    { nome: 'Futsal', imagem: require('../assets/img/portfolio/portfolio-2.jpg'), rota: 'FutsalScreen' },
    { nome: 'Corrida', imagem: require('../assets/img/portfolio/portfolio-3.jpg'), rota: 'CorridaScreen' },
    { nome: 'Musculação', imagem: require('../assets/img/portfolio/portfolio-4.jpg'), rota: 'MusculacaoScreen' },
    { nome: 'Skate', imagem: require('../assets/img/portfolio/portfolio-5.jpg'), rota: 'SkateScreen' },
    { nome: 'Basquete', imagem: require('../assets/img/portfolio/portfolio-9.jpg'), rota: 'BasqueteScreen' },
    { nome: 'Vôlei', imagem: require('../assets/img/portfolio/portfolio-8.jpg'), rota: 'VoleiScreen' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitleText}>Esportes</Text>
        <Text style={styles.sectionSubtitleText}>Confira <Text style={styles.highlightText}>o que praticar:</Text></Text>
        <Text style={styles.sectionDescriptionText}>A atividade física é fundamental em qualquer idade e é um dos meios de cuidar da saúde e ter uma melhor qualidade de vida. Confira algumas formas de se exercitar em espaços públicos.</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterItem}>
            <Text style={styles.filterItemText}>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterItem}>
            <Text style={styles.filterItemText}>Parque</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterItem}>
            <Text style={styles.filterItemText}>Praça</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterItem}>
            <Text style={styles.filterItemText}>COMPAZ</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.portfolioList}>
        {esportes.map((esporte, index) => (
          <TouchableOpacity
            key={index}
            style={styles.portfolioItem}
            onPress={() => navigation.navigate(esporte.rota)}
          >
            <Image source={esporte.imagem} style={styles.imagem} />
            <View style={styles.portfolioInfo}>
              <Text style={styles.portfolioInfoTitle}>{esporte.nome}</Text>
              <Text style={styles.portfolioInfoDescription}>{esporte.descricao}</Text>
              <TouchableOpacity style={styles.detailsLink}>
                <Text style={styles.detailsLinkText}>Mais detalhes</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    marginBottom: 20,
  },
  sectionTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionSubtitleText: {
    fontSize: 18,
    marginBottom: 10,
  },
  highlightText: {
    fontWeight: 'bold',
  },
  sectionDescriptionText: {
    fontSize: 16,
    color: '#888',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  filterItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f1f1f1',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  filterItemText: {
    fontSize: 16,
    color: '#555',
  },
  portfolioList: {
    marginBottom: 20,
  },
  portfolioItem: {
    marginBottom: 20,
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  portfolioInfo: {
    paddingVertical: 10,
  },
  portfolioInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  portfolioInfoDescription: {
    fontSize: 16,
    color: '#888',
  },
  detailsLink: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsLinkText: {
    color: '#555',
  },
});

export default EsportesScreen;
