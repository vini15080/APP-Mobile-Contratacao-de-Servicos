import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { TextInput } from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'




export default function App () {
  const [senha, setSenha] = useState('')
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('')


    return (
    <View style={styles.container}>
      <View style={styles.login}>
        <TextInput 
                label='E-mail'
                mode='outlined'
                placeholder='Joao@hotmail.com'
                value={email}
                onChangeText={(text) => setEmail(text)}
                
              />      

        <View style={styles.inputArea} >
          <TextInput            
            label='senha'
            style={styles.input}
            mode='outlined'                        
            value={senha}
            onChangeText={(texto)=>setSenha(texto)}
            secureTextEntry={hidePass}
          />
   
          <TouchableOpacity style={styles.icon} onPress={ ()=> setHidePass(!hidePass) } > 
            <Ionicons name='eye' color='#612F71' size={30} />

          </TouchableOpacity>
        </View> 
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
    
    },   
    login: {
      width: '98%'
    },
    inputArea: {       
     flexDirection: 'row',
     width: '100%',      
     height: 50,
     alignItems: 'center',
     alignContent: 'center',
     paddingTop: 20,
     justifyContent: 'space-between'
    },
    input: {         
      width:'85%',
      height: 50,
      color: '#fff',      
      fontSize:18
      },
    icon: {         
      width: '12%',   
      height:50,    
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',      

      },
     
})
