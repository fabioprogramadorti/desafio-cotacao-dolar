import getCotacaoByDate from './services/bacen.service'

export default {
  Query: {
    cotacaoDolar: async (_: any, { date }: any) => {

      var cotacao = await getCotacaoByDate(date)
      console.log(cotacao)
      return cotacao
    }
  }
}