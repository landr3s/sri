const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

// Conectar a MongoDB
mongoose
  .connect("mongodb://localhost:27017/mi_base_de_datos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB")
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB", err)
  })

// Importar rutas
const facturasRoute = require("./routes/facturas")
const impuestosRoute = require("./routes/impuestos") // Nueva ruta para impuestos

app.use("/api/facturas", facturasRoute)
app.use("/api/impuestos", impuestosRoute) // Nueva ruta para impuestos

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
