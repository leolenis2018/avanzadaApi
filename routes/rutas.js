const { Router } = require('express')
const rutas = Router();

//IMPORTO LOS CONTROLADORES

const {registrarHabitacion} = require('../controllers/controladorHabitacion.js')
const {buscarHabitacion} = require('../controllers/controladorHabitacion.js')
const {editarHabitacion} = require('../controllers/controladorHabitacion.js')
const {eliminarHabitacion} = require('../controllers/controladorHabitacion.js')



rutas.post('/avanzada/v1/habitacion', registrarHabitacion)
rutas.get('/avanzada/v1/habitacion', buscarHabitacion)
rutas.put('/avanzada/v1/habitacion/:id', editarHabitacion)
rutas.delete('/avanzada/v1/habitacion/:id', eliminarHabitacion)

module.exports = rutas