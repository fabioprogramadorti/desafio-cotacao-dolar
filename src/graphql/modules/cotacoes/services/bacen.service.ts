import axios from 'axios'

async function getCotacaoByDate(date: String) {

  var baseUrl = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda='USD',dataCotacao='${date}')?$format=json`
  try {
    const response = await axios.get(baseUrl)
    return response.data.value

  } catch (error) {
    return error
  }

}

export default getCotacaoByDate