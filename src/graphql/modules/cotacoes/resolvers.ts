import getCotacaoByDate from './services/bacen.service'
import { getLastCotacao } from '../../../utils/cotacao'
import CotacaoModel from '../../../db/models/cotacao.model'

interface CotacaoDate {
  date: String
}

export default {
  Query: {
    cotacaoDolar: async (_: any, { date }: CotacaoDate) => {
      try {
        var cotacoes = await getCotacaoByDate(date)

        // filtra a cotacao pelo maior horário
        const ultimaCotacao = getLastCotacao(cotacoes)
        await CotacaoModel.create({ ...ultimaCotacao })

        return ultimaCotacao

      } catch (error) {
        return error
      }
    }
  }
}