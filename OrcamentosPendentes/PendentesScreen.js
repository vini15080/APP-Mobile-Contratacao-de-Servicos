import React , {useEffect, useState}  from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import CustomButton from '../Login/CustonButton'

import {TextInput } from 'react-native-paper'


export default ({navigation}) => {
  const [atividade, setAtividade] = useState('')
  const [valor, setValor] = useState('')


  return (
    <View style={styles.container} >

      <View style={styles.servicos}> 
       <TextInput 
              label='Atividade'
              mode='outlined'
              placeholder='Descição'
              value={atividade}
              onChangeText={(text) => setAtividade(text)}
            />
      <TextInput 
            label='Valor'
            mode='outlined'
            placeholder='Valor'
            value={valor}
            onChangeText={(text) => setValor(text)}
          />     
      </View>
      
      <View style={styles.buttons}>

        <CustomButton title= 'aprovar'/>
        <CustomButton title= 'negar'/>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 15,
    backgroundColor: 'yellow'
  },
  servicos:{
    flex: 1,

  },
  buttons: {
    //backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 1,
  }
})