const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiKlaidosHandler = require("./klaidos/apiKlaidos-handler");
require('dotenv/config');


const programa = express();
const PORT = process.env.PORT || 6900;

programa.use(cors());
programa.use(express.json());
programa.use(express.urlencoded({ extended: true }));
//programa.use(bodyParser.json());

//Importuoti maršrutai
require("./marsrutai/marsrutai")(programa);


programa.use(apiKlaidosHandler);
//Klausomės įvado
programa.listen(PORT, () =>{
    console.log("Serveris pradėjo darbą:", PORT);
});