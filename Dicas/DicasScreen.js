import React, {useState, useLayoutEffect, useEffect} from 'react'
//import {buscarTodasDicas, buscarDicaPorId} from './DicasAPI'
import * as DicasAPI from './DicasAPI'
import {View, Text, Alert, Image, Button, StyleSheet } from 'react-native'

export default () =>  {
  //const dicas = DicasAPI.buscarTodasDicas()
  const [indice, setIndice] = useState(1)
  const [dica, setDica] = useState({})

  useEffect(() => {
    console.log('Use Effect foi executado')
    carregarDica()
  },)

  const carregarDica = async () => {
    try {
      const dados = await DicasAPI.buscarDicaPorId(indice)
      if(dados !== null) {
        setDica(dados)
      } else {
        alert('Não temos mais dicas para hoje. Retornando para a Dica 1')
        setIndice(1)
      }
      
    } catch(err) {
      alert('Falha ao tentar carregar as dicas, favor tentar mais tarde. ')
    }
  }

  console.log('Tela foi desenhada ')

  return (
    <View style={styles.container}>
      <Image source={{uri: dica.imagemDica}} style={styles.imagem} />
      <Text>{dica.textoDica}</Text>
      <View style={styles.botoes}>
        <Button title='SIM' onPress={() => setIndice(indice + 1)} />
        <Button title='NÃO' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row"
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  imagem: {
    width: 300,
    height: 250
  },
  botoes: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

// DicasAPI.buscarTodasDicas()
// DicasAPI.buscarDicaPorId(1)
// DicasAPI.buscarDicaPorId(9)
