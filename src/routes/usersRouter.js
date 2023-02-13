//Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo
const express = require("express");
const router = express.Router();

//Importamos el controlador de usuarios
const usersController = require("../controllers/usersController.js")

//En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas

//Procesa el pedido get con ruta /users/register
router.get("/register", usersController.register);

//Procesa el pedido get con ruta /users/login
router.get("/login", usersController.login);

//Procesa el pedido get con ruta /users/profile
router.get("/profile", usersController.profile);

//Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router