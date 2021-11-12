//configurando variables de entorno
require("dotenv").config();

//importo el servidor modelo
const ServidorModelo = require("./models/ServidorModelo.js");

//crear un objeto de la clase servidormodelo
const servidorHotel = new ServidorModelo();

//despertar el servidor
servidorHotel.despertarServidor();
