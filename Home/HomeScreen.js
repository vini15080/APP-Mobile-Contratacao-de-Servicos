import React from 'react'
import { View, Text, StyleSheet,TextInput} from 'react-native'
import Constants from 'expo-constants'
import CustomButton from '../Login/CustonButton'


export default ({navigation})=> {
  return(
      <View style={styles.container}>
        <View style={styles.dadosHome}>
          <Text> Olá: Usuario de login </Text>
        </View>
        <View style={styles.buttons}> 
           <CustomButton title='Histórico de contratações' />
           <CustomButton title='Orçamentos Pendêntes' onPress ={() => navigation.navigate('Orcamentos Pendetes')} />
           <CustomButton title='Buscar Serviços' onPress ={() => navigation.navigate('Orcamento')} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  dadosHome:{
    flex: 1,
  //  backgroundColor: 'green'
  },
   buttons: {
    //backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 15,
  
  }
})