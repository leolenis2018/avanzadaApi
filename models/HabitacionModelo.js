//se importan utilidades de mongoose
const { model, Schema } = require('mongoose')

//creamos el esquema de datos
const HabitacionModelo = Schema({

    nombreCliente: {
        type: String,
        required: true
    },

    apellidoCliente: {
        type: String,
        required: true
    },

    telefonoCliente: {
        type: Number,
        required: true
    },

    fechaInicioReserva: {
        type: Date,
        required: true
    },

    fechaFinReserva: {
        type: Date,
        required: true
    },

    numeroPersonas: {
        type: Number,
        required: true
    }


})

module.exports = model('Habitaciones', HabitacionModelo)