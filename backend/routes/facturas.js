const express = require("express")
const router = express.Router()
const Factura = require("../models/Factura")

// Obtener todas las facturas
router.get("/", async (req, res) => {
  try {
    const facturas = await Factura.find()
    res.json(facturas)
  } catch (err) {
    res.json({ message: err })
  }
})

// Crear una nueva factura
router.post("/", async (req, res) => {
  const factura = new Factura({
    tipoGasto: req.body.tipoGasto,
    ruc: req.body.ruc,
    valor: req.body.valor,
  })

  try {
    const savedFactura = await factura.save()
    res.json(savedFactura)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
