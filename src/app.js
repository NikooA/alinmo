//Requerimos y ejecutamos Express para tener disponibles los metodos
const express = require('express')
const app = express()

//Modulo nativo para manejar las rutas de los archivos
const path = require('path')

//Importamos los distintos enrutadores
const productsRouter = require("./routes/productsRouter.js")
const usersRouter = require("./routes/usersRouter.js")
const mainRouter = require("./routes/mainRouter.js")

//Usando recursos estáticos
app.use(express.static('public'));

//Usando los enrutadores importados
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/", mainRouter);

//Ponemos a escuchar el servidor
app.listen(3030, ()=>{
    console.log("Servidor corriendo en http://localhost:3030");
})

//Definimos las rutas a los distintos pedidos que nuestros sitio sabe responder
//Esto se utiliza antes de dividir las carpetas en rutas y controladores con el modelo MVC

// app.get('/', function (req, res) {
//    res.sendFile(path.resolve(__dirname, './views/index.html'))
//   })

// app.get('/products', function (req, res) {
//     res.sendFile(path.resolve(__dirname, './views/products.html'))
//   })

// app.get('/login', function (req, res) {
//     res.sendFile(path.resolve(__dirname, './views/login.html'))
//   })  

// app.get('/register', function (req, res) {
//     res.sendFile(path.resolve(__dirname, './views/register.html'))
//   })  