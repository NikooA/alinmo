//Requerimos path para poder enviar los archivos html
const path = require("path");

//Creamos el objeto literal con los métodos a exportar
const mainController = {

    //Manejo del pedido get con ruta /
    index: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/index.html"))
    }
}

//Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = mainController;