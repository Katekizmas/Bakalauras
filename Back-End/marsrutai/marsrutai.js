const modelisAutentifikacija = require("../modeliai/autentifikacija.modelis");


module.exports = function(programa){

    programa.use("/autentifikacija", modelisAutentifikacija);
};