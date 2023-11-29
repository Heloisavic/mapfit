import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import Map from './components/map';
import Faq from './components/FaqScreen';
import Personal from './components/personal';
import CadastroPersonal from './components/CadastroPersonal';
import Login from './components/login';
import Esportes from './components/EsportesScreen';
import Locais from './components/locais';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomHeader = ({ navigation }) => {
  return (
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>
      MAPFIT
    </Text>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Map" screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="Mapa"
          component={() => (
            <View style={{ flex: 1 }} scrollEnabled={false}>
              <Map />
            </View>
          )}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
        <Drawer.Screen
          name="FAQ"
          component={() => (
            <View style={{ flex: 1 }} scrollEnabled={false}>
              <Faq />
            </View>
          )}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
        <Drawer.Screen
          name="Personal"
          component={() => (
            <View style={{ flex: 1 }} scrollEnabled={false}>
              <Personal />
            </View>
          )}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
         <Drawer.Screen
          name="Cadastro"
          component={() => (
            <View style={{ flex: 1 }} scrollEnabled={false}>
              <CadastroPersonal />
            </View>
          )}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
         <Drawer.Screen
          name="Login"
          component={() => (
            <View style={{ flex: 1 }} scrollEnabled={false}>
              <Login />
            </View>
          )}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
        <Drawer.Screen
          name="Esportes"
          component={() => (
            <View style={{ flex: 1 }} scrollEnabled={false}>
              <Esportes />
            </View>
          )}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
        <Drawer.Screen
          name="Locais"
          component={() => (
            <View style={{ flex: 1 }} scrollEnabled={false}>
              <Locais />
            </View>
          )}
          options={{
            headerTitle: props => <CustomHeader {...props} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
