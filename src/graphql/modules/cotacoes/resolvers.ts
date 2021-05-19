import getCotacaoByDate from './services/bacen.service'
import { getLastCotacao } from '../../../utils/cotacao'
interface CotacaoDate {
  date: String
}

export default {
  Query: {
    cotacaoDolar: async (_: any, { date }: CotacaoDate) => {

      var cotacoes = await getCotacaoByDate(date)

      // filtra a cotacao pelo maior horário
      const ultimaCotacao = getLastCotacao(cotacoes)
      
      return ultimaCotacao
    }
  }
}