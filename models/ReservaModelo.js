//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const ReservaModelo = Schema({

    nombreHabitacion: {
        type: String,
        required: true
    },

    fotoHabitacion: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precioAdultoNoche: {
        type: Number,
        required: true
    },

    precioNinoNoche: {
        type: Date,
        required: true
    },
    
})

module.exports = model('Reservas', ReservaModelo)