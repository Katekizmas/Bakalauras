const modelisAutentifikacija = require("../modeliai/autentifikacija.modelis");
const modelisTvarkarastis = require ("../modeliai/tvarkarastis.modelis");

module.exports = function(programa){

    programa.use("/autentifikacija", modelisAutentifikacija);
    programa.use("/tvarkarastis" , modelisTvarkarastis);
};