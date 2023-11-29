import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Alert, Modal } from 'react-native';
import axios from 'axios';

const CadastroPersonal = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [cref, setCref] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [imagem, setImagem] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [refresh, setRefresh] = useState(false);

  const cadastrarPersonal = () => {
    const data = {
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senha,
      cref: cref,
      dataNascimento: dataNascimento,
      imagem: imagem
    };

    axios
      .post('http://localhost:3000/personal/add', data)
      .then(response => {
        // Verificar a resposta do servidor
        if (response.status === 200) {
          // Cadastro realizado com sucesso
          setShowPopup(true);
          setPopupMessage('Cadastro realizado com sucesso!');
          setRefresh(true);
        } else {
          // Lidar com outros erros desconhecidos
          setShowPopup(true);
          setPopupMessage('Erro desconhecido!');
        }
      })
      .catch(error => {
        // Lidar com erros de rede ou exceções
        setShowPopup(true);
        setPopupMessage('Erro de rede ou exceção: ' + error.message);
      });
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Seu nome"
        style={styles.textInput}
        onChangeText={text => setNome(text)}
      />
      <TextInput
        placeholder="Seu email"
        style={styles.textInput}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Seu telefone"
        style={styles.textInput}
        onChangeText={text => setTelefone(text)}
      />
      <TextInput
        placeholder="Crie uma senha"
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={text => setSenha(text)}
      />
      <TextInput
        placeholder="CREF"
        style={styles.textInput}
        onChangeText={text => setCref(text)}
      />
      <TextInput
        placeholder="Data de Nascimento"
        style={styles.textInput}
        onChangeText={text => setDataNascimento(text)}
      />
      <TextInput
        placeholder="URL da Imagem para sua foto"
        style={styles.textInput}
        onChangeText={text => setImagem(text)}
      />

      <TouchableOpacity style={styles.button} onPress={cadastrarPersonal}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <Modal
        visible={showPopup}
        transparent={true}
        animationType="fade"
        onRequestClose={closePopup}
      >
        <View style={styles.popupContainer}>
          <View style={styles.popup}>
            <Text style={styles.popupText}>{popupMessage}</Text>
            <TouchableOpacity style={styles.popupButton} onPress={closePopup}>
              <Text style={styles.popupButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 8,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#20C997',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  popupButton: {
    backgroundColor: '#20C997',
    padding: 10,
    borderRadius: 8,
  },
  popupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CadastroPersonal;
