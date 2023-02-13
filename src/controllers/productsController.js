//Requerimos path para poder enviar los archivos html
const path = require("path");

//Creamos el objeto literal con los métodos a exportar
const productsController = {

    //Manejo del pedido get con ruta /products/sell
    vender: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/products.ejs"))
    },
    //Manejo del pedido get con ruta /products/buy
    comprar: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/products.ejs"))
    },
    //Manejo del pedido get con ruta /products/detail
    detalle: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/products.ejs"))
    }
}

//Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = productsController;