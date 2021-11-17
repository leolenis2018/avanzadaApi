const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const {registrarHabitacion} = require('../controllers/controladorHabitacion.js')
const {buscarHabitacion} = require('../controllers/controladorHabitacion.js')
const {editarHabitacion} = require('../controllers/controladorHabitacion.js')
const {eliminarHabitacion} = require('../controllers/controladorHabitacion.js')

const {registrarReserva} = require('../controllers/controladorReserva.js')
const {buscarReserva} = require('../controllers/controladorReserva.js')
const {editarReserva} = require('../controllers/controladorReserva.js')
const {eliminarReserva} = require('../controllers/controladorReserva.js')



rutas.post('/avanzada/v1/habitacion', registrarHabitacion)
rutas.get('/avanzada/v1/habitacion', buscarHabitacion)
rutas.put('/avanzada/v1/habitacion/:id', editarHabitacion)
rutas.delete('/avanzada/v1/habitacion/:id', eliminarHabitacion)

rutas.post('/avanzada/v1/reserva', registrarReserva)
rutas.get('/avanzada/v1/reserva', buscarReserva)
rutas.put('/avanzada/v1/reserva/:id', editarReserva)
rutas.delete('/avanzada/v1/reserva/:id', eliminarReserva)

module.exports = rutas