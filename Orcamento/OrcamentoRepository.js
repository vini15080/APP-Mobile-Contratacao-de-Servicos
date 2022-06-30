import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid'

const key = 'orcamentos'


const adicionar = async (tipoServico, nome, estado, cidade, telefone, foto) => {
  const listaOrcamentos = await buscarTodos()
  console.log('Contatos do banco:', JSON.stringify(listaOrcamentos))

  const orcamento = {
    id: uuid.v4(),
    tipoServico,
    nome,
    telefone,
    foto,
    estado,
    cidade
  }

  listaOrcamentos.push(orcamento)

  console.log('Nova lista:', JSON.stringify(listaOrcamentos))
  await AsyncStorage.setItem(key, JSON.stringify(listaOrcamentos))
}

const buscarTodos = async () => {
  return await AsyncStorage.getItem(key).then(JSON.parse) || []
}


const removerTodos = async () => {
  await AsyncStorage.removeItem(key)
}

const removerPorId = async (id) => {
  const listaOrcamentos = await buscarTodos()
  const novaLista = listaOrcamentos.filter(c => c.id !== id)
  await AsyncStorage.setItem(key, JSON.stringify(novaLista))
}

const alterar = async (orcamento) => {
  const listaOrcamentos = await buscarTodos()
  const antigoOrcamento = listaOrcamentos.find(c => c.id === orcamento.id)

  if(antigoOrcamento) {
    antigoOrcamento.nome = orcamento.nome
    antigoOrcamento.profissao = orcamento.profissao
    antigoOrcamento.estado = orcamento.estado
    antigoOrcamento.cidade = orcamento.cidade
    antigoOrcamento.telefone = orcamento.telefone
    antigoOrcamento.foto = orcamento.foto

    await AsyncStorage.setItem(key, JSON.stringify(listaOrcamentos))
  }
}

export {
  adicionar,
  buscarTodos,
  removerPorId,
  removerTodos,
  alterar
}

















