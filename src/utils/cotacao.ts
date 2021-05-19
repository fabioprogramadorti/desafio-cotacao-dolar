
interface Cotacao {
  paridadeCompra: Number,
  paridadeVenda: Number,
  cotacaoCompra: Number,
  cotacaoVenda: Number,
  dataHoraCotacao: string,
  tipoBoletim: string,
}

export class FiltrosDeCotacoes {
  cotacoes: [Cotacao]

  constructor(cotacoes: [Cotacao]) {
    this.cotacoes = cotacoes
  }

  getLastCotacao = (): Cotacao => {
    const ultimaCotacao = this.cotacoes.reduce((acc, item) => this.returnLast(acc, item), this.cotacoes[0])
    return ultimaCotacao
  }

  private returnLast = (c1: Cotacao, c2: Cotacao): Cotacao => {
    const date1 = new Date(c1.dataHoraCotacao)
    const date2 = new Date(c2.dataHoraCotacao)

    return date1 > date2 ? c1 : c2
  }

}
