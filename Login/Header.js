import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import logo from '../assets/logo.png'

export default () => {

  return (
    <View style={styles.conteiner}  >
      <View>
        <View style={styles.header} > 
          <Text style={styles.titulo} > Contrate </Text>
           <Image source={logo} style={styles.imagem} />
           <Text style={styles.subTitulo} > Escolha um Serviço </Text>
             <Text style={styles.msgpadrao}> Localize um prestador de forma fácil e agil</Text>
             <Text style={styles.msgpadrao} > Entre em contato e faça um orçamento </Text>
        </View>   
      </View>  
    </View>
  )

}

const styles = StyleSheet.create({

  conteiner: {       
    justifyContent: 'center',       
  },

  header: {         
    backgroundColor: '#612F71',     
    alignItems: 'center',     
    padding: 5,    
  },

  titulo:{
    fontSize: 30,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 25,

  },

  subTitulo: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 5
  },

  msgpadrao: {
    marginTop: 5,    
    fontSize: 15,
    color: 'white',
  },

  imagem: {
    width: 120,
    height:120,   
    borderRadius: 65,
  },  

})

