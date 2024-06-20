const mongoose = require("mongoose")

const FacturaSchema = mongoose.Schema({
  tipoGasto: {
    type: String,
    required: true,
  },
  ruc: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("Factura", FacturaSchema)
