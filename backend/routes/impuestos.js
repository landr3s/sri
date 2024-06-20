const express = require("express")
const router = express.Router()
const Impuesto = require("../models/Impuesto")

router.post("/", async (req, res) => {
  const impuesto = new Impuesto({
    cedula: req.body.cedula,
    ingreso: req.body.ingreso,
    salud: req.body.salud,
    educacion: req.body.educacion,
    vestimenta: req.body.vestimenta,
    vivienda: req.body.vivienda,
    alimentacion: req.body.alimentacion,
    impuesto: req.body.impuesto,
  })

  try {
    const savedImpuesto = await impuesto.save()
    res.json(savedImpuesto)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
