//Requerimos path para poder enviar los archivos html
const path = require("path");

//Creamos el objeto literal con los métodos a exportar
const usersController = {

    //Manejo del pedido get con ruta /users/login
    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/login.ejs"))
    },
    //Manejo del pedido get con ruta /users/register
    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/register.ejs"))
    },
    //Manejo del pedido get con ruta /users/profile
    profile: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/profile.ejs"))
    }
}

//Exportamos el objeto literal con los distintos métodos, que se usará en el enrutador por defecto
module.exports = usersController;