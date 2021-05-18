import axios from 'axios'

async function getCotacaoByDate(date: Date) {

  var baseUrl = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda='USD',dataCotacao='${date}')?$format=json`

  const response = await axios.get(baseUrl)

  return response.data
}

export default getCotacaoByDate