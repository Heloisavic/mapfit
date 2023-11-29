import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text, View, Alert, Modal } from 'react-native';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const fazerLogin = () => {
    const data = {
      email: email,
      senha: senha
    };

    axios
      .post('http://localhost:3000/personal/login', data)
      .then(response => {
        // Verificar a resposta do servidor
        if (response.status === 200) {
          // Autenticação bem-sucedida
          setShowPopup(true);
          setPopupMessage('Login realizado com sucesso!');
        } else if (response.status === 401) {
          // Lidar com o erro de senha incorreta
          setShowPopup(true);
          setPopupMessage('Senha incorreta!');
        } else if (response.status === 404) {
          // Lidar com o erro de usuário não encontrado
          setShowPopup(true);
          setPopupMessage('Usuário não encontrado!');
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
        placeholder="CREF"
        style={styles.textInput}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Sua senha"
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={text => setSenha(text)}
      />

      <TouchableOpacity style={styles.button} onPress={fazerLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    width: '80%',
    height: 40,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingLeft: 16,
    marginBottom: 16,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgb(32, 201, 151)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
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
    backgroundColor: 'rgb(32, 201, 151)',
    padding: 10,
    borderRadius: 8,
  },
  popupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
