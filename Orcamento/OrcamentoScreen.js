import React  from 'react'
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity} from 'react-native'
import ItemComponent from './ItemComponente'
import logoTeste from '../assets/logoTeste.png'
import eletricista from '../assets/eletricista.png'
import pedreiro from '../assets/pedreiro.png'
import marceneiro from '../assets/marceneiro.png'
import file from '../assets/file.png'
import pintor from '../assets/pintor.png'
import soldador from '../assets/soldador.png'
import download from '../assets/download.png'
import images from '../assets/images.png'


import CustomButton from '../Login/CustonButton'




  const Historico = [
      {id: 1, foto:eletricista, nome: "Rodrigo",profissao: "Eletricista", cidade:"Belo Horizonte", estado:"MG", telefone: "9 75116985"},
      {id: 2, foto:pedreiro, nome: "Marcos",profissao: "Pedreiro", cidade:"Betim", estado:"MG", telefone: "9 68456152"},
      {id: 3, foto:marceneiro, nome: "Lucas",profissao: "Marceneiro",cidade:"Contagem", estado:"MG", telefone: "9 68456456"},
      {id: 4, foto:file, nome: "João",profissao: "Vidraceiro",cidade:"Belo Horizonte", estado:"MG", telefone: "9 68445456"},
      {id: 5, foto:pintor, nome: "Wesley",profissao: "Pintor",cidade:"Betim", estado:"MG", telefone: "9 6865456"},
      
      {id: 6, foto:soldador, nome: "Rogeiro",profissao: "Soldador",cidade:"Belo Horizonte", estado:"MG", telefone: "9 6865556"},
      {id: 6, foto:download, nome: "Paulo",profissao: "Bombeiro Hidráulicoador",cidade:"Belo Horizonte", estado:"MG", telefone: "9 6865556"},
      {id: 6, foto:images, nome: "Rodolfo",profissao: "Gesseiro",cidade:"Belo Horizonte", estado:"MG", telefone: "9 6865556"},

]

  const removerOrcamento = async (id) => {
  
  }

  export default ({navigation}) =>{
  return (
      <View style= {styles.container}>
        <Text style={styles.text}>Tipos De Serviços </Text>
          <FlatList    
          style={styles.lista}      
          data={Historico}
          keyExtractor={item => item.id}
          renderItem={({item})=>
          <TouchableOpacity onPress={() => navigation.navigate('sos', {...item})}>
            <ItemComponent
              foto={item.foto}
              nome={item.nome}
              profissao={item.profissao}
              cidade={item.cidade}
              estado={item.estado}
              onDelete={() => removerOrcamento(item.id)}
            />  
            </TouchableOpacity>                                    
          } 
          />    

           <View style={styles.button}> 
          <CustomButton title='Buscar Serviços' color={'#000'} onPress ={() => navigation.navigate('Orcamento')}/>
         </View>     
        
       </View>
       
  )
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1

    },
    text:{
    // flex: 1,
     //color: 'red',
     textAlign: "center",
     fontSize: 20,
     paddingBottom: 15,
     }, 

     button:{
       flex:1,
       paddingBottom: 50,
       

     },

     lista:{
      height: '80%'
     }

    
   
  }

  )