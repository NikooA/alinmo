//Requerimos y ejecutamos Express para tener disponibles los metodos
const express = require('express')
const app = express()

//Modulo nativo para manejar las rutas de los archivos
const path = require('path')

//Usando recursos estáticos
app.use(express.static('public'));

//Ponemos a escuchar el servidor
app.listen(3030, ()=>{
    console.log("Servidor corriendo en http://localhost:3030");
})

//Definimos las rutas a los distintos pedidos que nuestros sitio sabe responder
app.get('/', function (req, res) {
   res.sendFile(path.resolve(__dirname, './index.html'))
  })

app.get('/products', function (req, res) {
    res.sendFile(path.resolve(__dirname, './views/products.html'))
  })