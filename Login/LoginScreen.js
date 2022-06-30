import React, {useState}  from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import CustonButton from './CustonButton'
import Constants from 'expo-constants'
import Header from './Header'
import ClienteScreen from '../CadCliente/ClienteScreen'
import HomeSreen from '../Home/HomeScreen'
import UserPass from './UserPass'


export default ({navigation, route}) => {
  
  
  const test = () => {
    alert('Teste de funcionaliade')
  }
   return (
    <View style={styles.container}>
        <Header/>
          <View> 
            <Text style={styles.info}> Entre com os dados para Login </Text>
          </View>

          <UserPass/>
          
        <View style={styles.buttons}>
          <CustonButton title='Acessar' onPress ={() => navigation.navigate('Home')} />
          <CustonButton title='Efetuar Cadastro' onPress ={() => navigation.navigate('Cadastro de usuário')} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    //justifyContent: 'space-between',    
    flex: 1,
    
  },

  buttons: {
    //backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 15,  
  },

  info: {
    //flex:1,
    
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#979090',
    fontSize: 20,
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    textAlign: 'center'
   // backgroundColor: 'gray'   
    
  }

});


