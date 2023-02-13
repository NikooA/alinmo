//Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo
const express = require("express");
const router = express.Router();

//Importamos el controlador de usuarios
const productsController = require("../controllers/productsController.js")

//En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas

//Procesa el pedido get con ruta /products/sell
router.get("/sell", productsController.vender);

//Procesa el pedido get con ruta /products/buy
router.get("/buy", productsController.comprar);

//Procesa el pedido get con ruta /products/detail
router.get("/detail:id", productsController.detalle);

//Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router