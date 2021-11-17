//EL CONTROLADOR ES EL ENCARGADO
//DE ADMINISTRAR LAS PETICIONES Y RESPUESTAS

//IMPORTACIONES
const { request, response } = require("express");

const { insertarHabitacion } = require("../services/servicio.js");
const { leerHabitacion } = require("../services/servicio.js");
const { borrarHabitacion } = require("../services/servicio.js");
const { modificarHabitacion } = require("../services/servicio.js");

//crear una funcion para cada operacion del servidor
async function registrarHabitacion(peticion = request, respuesta = response) {
  try {
    let datosPeticion = peticion.body;

    await insertarHabitacion(datosPeticion);
    respuesta.status(200).json({
      estado: true,
      mensaje: "Exito registrando habitacion",
    });
  } catch (error) {
    respuesta.status(400).json({
      estado: false,
      mensaje: "Upss... tenemos un problema: " + error,
    });
  }
}

async function buscarHabitacion(peticion = request, respuesta = response) {
  try {

    let id = peticion.params.id;

    let habitacion = await leerHabitacion();
    respuesta.status(200).json({
      estado: true,
      mensaje: habitacion,
    });

  } catch (error) {
    respuesta.status(400).json({
      estado: false,
      mensaje: "Upss... tenemos un problema: " + error,
    });
  }
}

async function editarHabitacion(peticion = request, respuesta = response) {
  try {
    let id = peticion.params.id;
    let datosPeticion = peticion.body;

    await modificarHabitacion(id, datosPeticion);

    respuesta.status(200).json({
      estado: true,
      mensaje: "Exito editando informacion de la habitacion",
    });
  } catch (error) {
    respuesta.status(400).json({
      estado: false,
      mensaje: "Upss... tenemos un problema: " + error,
    });
  }
}

async function eliminarHabitacion(peticion = request, respuesta = response) {
  try {
      
    let id = peticion.params.id;
    await borrarHabitacion(id);

    respuesta.status(200).json({
      estado: true,
      mensaje: "Exito al eliminar la habitacion",
    });
  } catch (error) {
    respuesta.status(400).json({
      estado: false,
      mensaje: "Upss... tenemos un problema: " + error,
    });
  }
}

module.exports = {
  registrarHabitacion,
  buscarHabitacion,
  editarHabitacion,
  eliminarHabitacion,
};

//H
