//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PODER OPERAR EN BD
const HabitacionModelo = require("../models/HabitacionModelo.js");
const ReservaModelo = require("../models/ReservaModelo.js");

//1. Funcion para insertar datos
async function insertarHabitacion(datos) {
  let habitacionNueva = HabitacionModelo(datos);
  return await habitacionNueva.save();
}

async function insertarReserva(datos) {
  let reservaNueva = ReservaModelo(datos);
  return await reservaNueva.save();
}

//2. Funcion para buscar
async function leerHabitacion() {
  let habitacionBuscar = await HabitacionModelo.find();
  return habitacionBuscar;
}

async function leerReserva() {
  let reservaBuscar = await ReservaModelo.find();
  return reservaBuscar;
}

//3. Funcion para eliminar
async function borrarHabitacion(id) {
  return await HabitacionModelo.findByIdAndDelete(id);
}

async function borrarReserva(id) {
  return await ReservaModelo.findByIdAndDelete(id);
}

//4. Funcion para editar
async function modificarHabitacion(id, datos) {
  return await HabitacionModelo.findByIdAndUpdate(id, datos);
}

async function modificarReserva(id, datos) {
  return await ReservaModelo.findByIdAndUpdate(id, datos);
}

module.exports = {
  insertarHabitacion,
  leerHabitacion,
  borrarHabitacion,
  modificarHabitacion,
};
