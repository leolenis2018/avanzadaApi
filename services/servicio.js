//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PODER OPERAR EN BD
const HabitacionModelo = require("../models/HabitacionModelo.js");

//1. Funcion para insertar datos
async function insertarHabitacion(datos) {
  let habitacionNueva = HabitacionModelo(datos);
  return await habitacionNueva.save();
}

//2. Funcion para buscar
async function leerHabitacion() {
  let habitacionBuscar = await HabitacionModelo.find();
  return habitacionBuscar;
}

//3. Funcion para eliminar
async function borrarHabitacion(id) {
  return await HabitacionModelo.findByIdAndDelete(id);
}

//4. Funcion para editar
async function modificarHabitacion(id, datos) {
  return await HabitacionModelo.findByIdAndUpdate(id, datos);
}

module.exports = {
  insertarHabitacion,
  leerHabitacion,
  borrarHabitacion,
  modificarHabitacion,
};

/*"nombreHabitacion": "Pent House",
    "descripcion": "Muy bonita y amplia",
    "precioAdultoNoche": 250000,
    "precioNinoNoche": 125000*/

//localhost:8080/avanzada/v1/reserva

/*"nombreCliente": "Julian Mateo",
      "apellidoCliente": "Lenis",
      "telefonoCliente": 58965,
      "fechaInicioReserva": "2021-11-12T00:00:00.000Z",
      "fechaFinReserva": "2021-11-15T00:00:00.000Z",
      "numeroPersonas": 5*/
