const { Schema, model } = require('mongoose');

// Estructura del documento en MongoDB a través de Mongoose
const usuarioSchema = new Schema({
    username: String,
    password: String,
    email: String,
    firstName: String,
    lastName: String  
})

// Obj. de la clase que me da acceso a los métodos para hacer el CRUD.
module.exports = model('Usuario', usuarioSchema);