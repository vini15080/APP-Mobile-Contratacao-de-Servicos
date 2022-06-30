import React from 'react' 
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import {View} from 'react-native'
import Header from './Login/Header'
import LoginScreen from './Login/LoginScreen'
import ClienteScreen from './CadCliente/ClienteScreen'
import HomeScreen from './Home/HomeScreen'
import OrcamentoScreen from './Orcamento/OrcamentoScreen'
import UserPass from './Login/UserPass'
import PendentesScreen from './OrcamentosPendentes/PendentesScreen'
import SosScreen from './sos/SosScreen'

const Stack = createNativeStackNavigator();

export default () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#612F71'},headerTintColor:'white'}} 
        initialRouteName='orcamento' >
          <Stack.Screen name='login' component={LoginScreen} options={{headerShown: false }}/>
          <Stack.Screen name='Cadastro de usuário' component={ClienteScreen}/>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Orcamento' component={OrcamentoScreen}/>
          <Stack.Screen name='User' component={UserPass}/>
          <Stack.Screen name='sos' component={SosScreen} />
          <Stack.Screen name='Orcamentos Pendetes' component={PendentesScreen} />

         
      </Stack.Navigator>
    </NavigationContainer>
   
  )

}


