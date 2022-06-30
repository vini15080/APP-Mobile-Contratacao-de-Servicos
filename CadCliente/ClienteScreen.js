
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import CustomButton from '../Login/CustonButton'

import {TextInput,Dialog } from 'react-native-paper'


export default ()=> {
    const [tipo, setTipo] = useState('')
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cpf, setCpf] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [senha, setSenha] = useState('')
    
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.header}> 
          Insira os dados para Cadastro 
        </Text>
      </View>
      <ScrollView style={styles.dadoscliente}>
       <TextInput 
              label='Nome'
              mode='outlined'
              placeholder='Joao da Silva'
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
        <TextInput 
              label='Idade'
              mode='outlined'
              placeholder='Idade'
              value={idade}
              onChangeText={(text) => setIdade(text)}
              keyboardType='phone-pad'
            /> 
        <TextInput 
              label='CPF'
              mode='outlined'
              placeholder='CPF'
              value={cpf}
              onChangeText={(text) => setCpf(text)}
              keyboardType='phone-pad'
            /> 
        <TextInput 
              label='E-mail'
              mode='outlined'
              placeholder='nome@email.com'
              value={email}
              onChangeText={(text) => setEmail(text)}
            />   
        <TextInput 
              label='Telefone'
              mode='outlined'
              placeholder='(xx) xxxxx-xxxx'
              value={telefone}
              onChangeText={(text) => setTelefone(text)}
              keyboardType='phone-pad'
            />
        <TextInput 
              label='UF'
              mode='outlined'
              placeholder='UF'
              value={uf}
              onChangeText={(text) => setUf(text)}
            />   
         <TextInput 
              label='Cidade'
              mode='outlined'
              placeholder='Cidade'
              value={cidade}
              onChangeText={(text) => setCidade(text)}
            />
         <TextInput 
              label='Bairro'
              mode='outlined'
              placeholder='Bairro'
              value={bairro}
              onChangeText={(text) => setBairro(text)}
            />
          <TextInput 
              label='Rua'
              mode='outlined'
              placeholder='Rua'
              value={rua}
              onChangeText={(text) => setRua(text)}
            />
          <TextInput 
              label='Número'
              mode='outlined'
              placeholder='123'
              value={numero}
              onChangeText={(text) => setNumero(text)}
              keyboardType='phone-pad'
            />   
          <TextInput 
              label='Complemento'
              mode='outlined'
              placeholder='Complemento'
              value={complemento}
              onChangeText={(text) => setComplemento(text)}
            />   
          <TextInput            
            label='Senha'
            style={styles.input}
            mode='outlined'                        
            value={senha}
            onChangeText={(texto)=>setSenha(texto)}
          />
      </ScrollView>
      <View style={styles.buttons}>
        <CustomButton title='Gravar'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 5,
   // backgroundColor: 'yellow'
  },
  header: {
    marginLeft: 35,
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center', 
    fontWeight:'bold',
  },

  dadoscliente:{
    padding: 12,
  },

   buttons: {
   // backgroundColor: 'gray',
    backgroundColor: 'white',
    padding: 18,
  
  },

})