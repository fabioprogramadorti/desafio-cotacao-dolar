
interface Cotacao {
  paridadeCompra: Number,
  paridadeVenda: Number,
  cotacaoCompra: Number,
  cotacaoVenda: Number,
  dataHoraCotacao: string,
  tipoBoletim: string,
}

export function getLastCotacao(cotacoes: Array<Cotacao>) {


  const ultimaCotacao = cotacoes.reduce((acc, item) => returnLast(acc, item), cotacoes[0])

  console.log(ultimaCotacao)
}

function returnLast(c1: Cotacao, c2: Cotacao): Cotacao {
  const date1 = new Date(c1.dataHoraCotacao)
  const date2 = new Date(c2.dataHoraCotacao)

  return date1 > date2 ? c1 : c2
}