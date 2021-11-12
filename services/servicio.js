//Encargado de realizar las operaciones en la BD

//IMPORTAR EL MODELO DE DATOS PARA PODER OPERAR EN BD
const HabitacionModelo = require("../models/HabitacionModelo.js");

//1. Funcion para insertar datos
async function insertarHabitacion(datos) {
  let habitacionNueva = HabitacionModelo(datos);
  return await habitacionNueva.save();
}

//2. Funcion para buscar habitacion
async function leerHabitacion() {
  let habitacionBuscar = await HabitacionModelo.find();
  return habitacionBuscar;
}

//3. Funcion para eliminar un habitacion
async function borrarHabitacion(id) {
  return await HabitacionModelo.findByIdAndDelete(id);
}

//4. Funcion para editar un habitacion
async function modificarHabitacion(id, datos) {

    return await HabitacionModelo.findByIdAndUpdate(id, datos)
}

module.exports = {
  insertarHabitacion,
  leerHabitacion,
  borrarHabitacion,
  modificarHabitacion,
};
