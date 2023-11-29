import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FAQScreen = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const [showAnswer, setShowAnswer] = useState([]);

const handleQuestionPress = (index) => {
  setShowAnswer((prevState) => {
    const updatedState = [...prevState];
    updatedState[index] = !updatedState[index];
    return updatedState;
  });
};


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.pageHeader}>
          <Text style={styles.heading}>Contato</Text>
          <Text style={styles.description}>Fale conosco! Assim que possível, iremos te responder.</Text>
        </View>
        <View>
        <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon name="envelope-square" size={20} color="rgb(32, 201, 151)" style={styles.icon} />
        </View>
        <View style={styles.textContainer}>
          <Text>Email:</Text>
          <Text style={styles.emailAddress}>faleconosco@mapfit.com</Text>
        </View>
      </View>
        </View>

        <View style={styles.section}>
          <TextInput
            style={[styles.input, styles.inputFullWidth]}
            placeholder="Nome"
          />
          <TextInput
            style={[styles.input, styles.inputFullWidth]}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, styles.inputFullWidth]}
            placeholder="Assunto"
          />
          <TextInput
            style={[styles.input, styles.textarea, styles.inputFullWidth]}
            placeholder="Mensagem"
            multiline
          />
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Enviar Mensagem</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.section, styles.centeredSection]}>
          <Text style={styles.sectionTitle}>Perguntas</Text>
          <Text style={styles.sectionSubtitle}>Algumas dúvidas frequentes</Text>

          {questions.map((question, index) => (
           <TouchableOpacity
           key={index}
           style={styles.question}
           onPress={() => handleQuestionPress(index)}
         >
           <Text style={styles.questionText}>{question.question}</Text>
           <Icon
             name={showAnswer[index] ? 'chevron-up' : 'chevron-down'}
             size={16}
             color="#333"
           />
           {showAnswer[index] && <Text style={styles.answer}>{question.answer}</Text>}
         </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  pageHeader: {
    marginBottom: 16,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 16,
  },
  section: {
    marginBottom: 16,
    width: '100%',
    maxWidth: 500,
  },
  centeredSection: {
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingLeft: 8,
    marginBottom: 8,
  },
  inputFullWidth: {
    width: '100%',
  },
  textarea: {
    height: 80,
    paddingTop: 8,
  },
  button: {
    backgroundColor: 'rgb(32, 201, 151);',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    alignSelf: 'center',
  },
  sectionSubtitle: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
    alignSelf: 'center',
  },
  question: {
    marginBottom: 8,
    alignSelf: 'center',
    width: '100%',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  answer: {
    marginTop: 8,
    fontSize: 16,
    color: '#666',
  },
  emailAddress:{
    color: 'rgb(32, 201, 151)',
  }
};

const questions = [
  {
    question: 'Qual o horário de funcionamento do Compaz?',
    answer: 'O Compaz Ariano Suassuna funciona das 07h às 21h30, enquanto o Miguel Arraes e o Dom Hélder funcionam das 08h às 20h.',
  },
  {
    question: 'É possível obter informações sobre eventos e atividades que acontecem nos parques?',
    answer: 'Ainda não possuímos essa função, mas anotamos a sugestão e em breve estaremos trazendo uma página exclusiva com mais informações sobre o que acontece nos parques.',
  },
  {
    question: 'Quais parques têm quadras de areia?',
    answer: 'O Parque Santana na zona norte, Parque Santos Dumont, Parque da Jaqueira, Parque Urbano da Macaxeira e o Parque Dona Lindu possuem quadras de areia.',
  },
  {
    question: 'Como traçar minha rota até o local que eu quero?',
    answer: 'Ao clicar na marcação que simboliza o local que você deseja ir, abrirá um popup contendo a opção de visualizar a rota até o local.',
  },
  {
    question: 'Como descubro mais informações sobre o esporte que desejo praticar?',
    answer: 'Você pode clicar na imagem que simboliza o esporte e, após aparecer o nome do esporte e mais informações, clique no último ícone à direita da tela. Você será redirecionado para uma tela com mais informações.',
  },
];

export default FAQScreen;
