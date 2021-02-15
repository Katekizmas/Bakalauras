const express = require("express");

const marsrutasGydytojas = require("../uzklausos/gydytojas.uzklausa");
const marsrutasAutentifikacija = require("../uzklausos/autentifikacija.uzklausa");


module.exports = function(programa){
    //programa.use(express.json());

    programa.use("/gydytojas", marsrutasGydytojas);
    programa.use("/autentifikacija", marsrutasAutentifikacija);
};