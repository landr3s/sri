const mongoose = require("mongoose")

const ImpuestoSchema = mongoose.Schema({
  cedula: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  ingreso: {
    type: Number,
    required: true,
  },
  salud: {
    type: Number,
    default: 0,
  },
  educacion: {
    type: Number,
    default: 0,
  },
  vestimenta: {
    type: Number,
    default: 0,
  },
  vivienda: {
    type: Number,
    default: 0,
  },
  alimentacion: {
    type: Number,
    default: 0,
  },
  gastos: {
    type: Number,
    required: true,
  },
  baseImponible: {
    type: Number,
    required: true,
  },
  fraccionBasica: {
    type: Number,
    required: true,
  },
  excedente: {
    type: Number,
    required: true,
  },
  valorExcedente: {
    type: Number,
    required: true,
  },
  impuestoFB: {
    type: Number,
    required: true,
  },
  impuestoRenta: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model("Impuesto", ImpuestoSchema)
