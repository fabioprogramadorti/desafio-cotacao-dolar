import getCotacaoByDate from './services/bacen.service'
import { FiltrosDeCotacoes } from '../../../utils/cotacao'
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
        const filtrosDeCotacoes = new FiltrosDeCotacoes(cotacoes)

        const ultimaCotacao = filtrosDeCotacoes.getLastCotacao()
        console.log(ultimaCotacao)
        await CotacaoModel.create({ ...ultimaCotacao })

        return ultimaCotacao

      } catch (error) {
        return error
      }
    }
  }
}