//Requerimos path para poder enviar los archivos html
const path = require("path");

//Creamos el objeto literal con los métodos a exportar
const mainController = {

    //Manejo del pedido get con ruta /
    index: (req, res) => {
        //Cambiamos como se usan las vistas(usamos render)
        //Ahora podemos pasar datos a las vistas (dinamismo)
        let datosAEnviar = "Datos a enviar de la BD"
        res.render("index", {datos: datosAEnviar })
        // res.sendFile(path.resolve(__dirname, "../views/index.html"))
    }
}

//Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = mainController;