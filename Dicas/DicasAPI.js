
const buscarTodasDicas = async () => {
  const res = await fetch('https://api-servico.vinciusbarros1.repl.co')
  return res.json()
}

const buscarDicaPorId = async (id) => {
  const res = await fetch('https://api-servico.vinciusbarros1.repl.co' + id)
  return res.json()
}


export {
  buscarTodasDicas,
  // buscarDicaPorId
}