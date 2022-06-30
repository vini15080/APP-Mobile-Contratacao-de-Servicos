import React, {useEffect, useLayoutEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

import * as Location from 'expo-location'
import MapView from 'react-native-maps';

import CustomButton from '../Login/CustonButton'

export default ({navigation, route}) => {
  const {tipo, nome, telefone} = route.params  
  const [localizacao, setLocalizacao] = useState()

  useLayoutEffect(() => {
    navigation.setOptions({title: nome})
  }, [navigation, nome])

  useEffect(() => {
    obterLocalizacao()
  }, [])

  async function obterLocalizacao() {
    const {status} = await Location.requestForegroundPermissionsAsync()

    if(status !== 'granted') {
      alert('Você precisa habilitar o serviço de localização do seu celular.')
    }

    const loc = await Location.getCurrentPositionAsync({})
    setLocalizacao({
      latitude: loc.coords.latitude,
      longitude: loc.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapa}>
        <MapView 
        initialRegion={localizacao}
        style={styles.MapView} 
        />

      </View>
      <View style={styles.botoes}>
        <CustomButton title='Localização'/>
        <CustomButton title='Discagem' />
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapa: {
    flex: 1,
    backgroundColor: 'blue'
  },
  botoes : {
    padding: 15,
    height: 210,
    justifyContent: 'space-evenly'
  },
  MapView: {
    height: '100%',
    width: '100%'

  }
})