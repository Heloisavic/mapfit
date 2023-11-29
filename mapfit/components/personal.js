import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

const PersonalCards = () => {
  const [personals, setPersonals] = useState([]);

  useEffect(() => {
    const getPersonals = async () => {
      try {
        const response = await fetch('http://localhost:3000/personal/personal');
        const data = await response.json();
        setPersonals(data.personal);
      } catch (error) {
        console.error('Erro ao buscar os personais:', error);
      }
    };

    getPersonals();
  }, []);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const diff = today - birthDate;
    const ageDate = new Date(diff);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <View style={styles.container}>
      {personals.length > 0 ? (
        personals.map((personal) => (
          <View key={personal.id} style={styles.card}>
            <Text style={styles.name}>Nome: {personal.name}</Text>
            <Text style={styles.atuacao}>Atuação: {personal.atuacao}</Text>
            <Image source={{ uri: personal.img }} style={styles.image} />
            <Text style={styles.age}>Idade: {calculateAge(new Date(personal.dataNascimento))}</Text>
            <Text style={styles.contact}>
              Contato:
              {'\n'}
              Email: {personal.email}
              {'\n'}
              Telefone: {personal.telefone}
            </Text>
          </View>
        ))
      ) : (
        <View style={styles.card}>
          <Text style={styles.name}>Nome: Exemplo Personal</Text>
          <Text style={styles.atuacao}>Atuação: Exemplo Atuação</Text>
          <Image
            source={{ uri: 'https://media.gettyimages.com/id/1324042769/pt/foto/confident-gym-owner.jpg?s=612x612&w=gi&k=20&c=LEKT51ghuPZgVANxTtGYlSdB6p2HZ1Rp-vHe-J2jGvw=' }}
            style={styles.image}
          />
          <Text style={styles.age}>Idade: 30</Text>
          <Text style={styles.contact}>
            Contato:
            {'\n'}
            Email: exemplo@example.com
            {'\n'}
            Telefone: 1234567890
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    alignItems: 'center', // Centraliza os cards horizontalmente
  },
  card: {
    backgroundColor: '#afc1d0',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  atuacao: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
  age: {
    fontSize: 14,
    marginBottom: 8,
  },
  contact: {
    fontSize: 14,
  },
};

export default PersonalCards;
