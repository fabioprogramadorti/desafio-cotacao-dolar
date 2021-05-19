import getCotacaoByDate from './services/bacen.service'
import { filtraUltimaCotacao } from '../../../utils/cotacao'
interface CotacaoDate {
  date: String
}

export default {
  Query: {
    cotacaoDolar: async (_: any, { date }: CotacaoDate) => {

      var cotacoes = await getCotacaoByDate(date)

      // filtra a cotacao pelo maior horário
      const ultimaCotacao = filtraUltimaCotacao(cotacoes)

      return cotacoes
    }
  }
}