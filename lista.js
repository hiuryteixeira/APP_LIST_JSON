const url = 'https://dados.ifpb.edu.br/dataset/26d67876-0cb2-41a4-83ed-7bde06eb736c/resource/0d03ee6a-2af1-4dde-9b3d-90419c48fabe/download/servidores.json'
const axios = require('axios')

const cargo = f => f.cargo_emprego === 'CONTADOR' // filtar por contador
const situacao = f => f.situacao.nome === 'APOSENTADO' // O IGUAL E EXATAMENTE IGUAL  FILTRA APOSENTADO
const jornada = f => f.jornada_trabalho === '40 HORAS SEMANAIS'


axios.get(url).then(resposta => {
    const servidores = resposta.data
    module.exports.resultado =
    servidores.filter(cargo).filter(situacao).filter(jornada)

    // const resultado_filtro = servidores.filter(cargo).filter(situacao).filter(jornada)
    // console.log(resultado_filtro)
})