//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PODER OPERAR EN BD
const ReservaModelo = require("../models/ReservaModelo.js");

//1. Funcion para insertar datos
async function insertarReserva(datos) {
  let reservaNueva = ReservaModelo(datos);
  return await reservaNueva.save();
}

//2. Funcion para buscar
async function leerReserva() {
  let reservaBuscar = await ReservaModelo.find();
  return reservaBuscar;
}

//3. Funcion para eliminar
async function borrarReserva(id) {
  return await ReservaModelo.findByIdAndDelete(id);
}

//4. Funcion para editar
async function modificarReserva(id, datos) {
  return await ReservaModelo.findByIdAndUpdate(id, datos);
}

module.exports = {
  insertarReserva,
  leerReserva,
  borrarReserva,
  modificarReserva,
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
