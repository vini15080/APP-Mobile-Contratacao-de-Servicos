import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default ({foto, profissao, nome, estado, cidade, telefone, onDelete}) => (
  <View style={styles.card}>
    <Image source={foto} style={styles.imagem} />
    <View style={styles.conteudo}>
      <Text>{profissao}</Text>
      <Text>{nome}</Text>
      <Text>{estado}</Text>
      <Text>{cidade}</Text>
      <Text>{telefone}</Text>
    </View>
    <TouchableOpacity
      onPress={onDelete}
    >
      <AntDesign name="delete" size={24} color="black" />
    </TouchableOpacity>
    <MaterialIcons name="call" size={24} color="black" />
  </View>
)

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center'
  }, 
  imagem: {
    marginRight: 10,
    height: 90,
    width: 70,
    borderRadius: 15 
  },
  conteudo: {
    flexGrow: 1
  }  
})