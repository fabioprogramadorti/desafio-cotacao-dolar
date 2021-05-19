import mongoose from 'mongoose'

const CotacaoSchema = new mongoose.Schema({
  paridadeCompra: {
    type: Number,
    required: true
  },
  paridadeVenda: {
    type: Number,
    required: true
  },
  cotacaoCompra: {
    type: Number,
    required: true
  },
  cotacaoVenda: {
    type: Number,
    required: true
  },
  dataHoraCotacao: {
    type: Date,
    required: true
  },
  tipoBoletim: {
    type: String,
    required: true
  },
}, { timestamps: { createdAt: 'timestamp_da_requisição' } })

export default mongoose.model('Cotacao', CotacaoSchema)