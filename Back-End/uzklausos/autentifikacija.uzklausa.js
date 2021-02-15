const express = require('express');
const klientas = require("../konfiguracijos/serveris.konfiguracija");
const apiKlaidos = require("../klaidos/apiKlaidos");

const modelisAutentifikacija = require("../modeliai/registracija.modeliai");
const router = express.Router();


const busenos = require("../klaidos/busenos");

//gauti visus irasus
router.get("/", async(req,res) => {
    res.json({
        pranesimas: "zdarova"
    });
});

router.post("/registracija", async(req, res, next) => {
    if(patvirtintiVartotoja(req.body)){

        const { pastas, slaptazodis } = req.body;

        modelisAutentifikacija.gautiVienaPagalPasta(req.body.pastas).then(vartotojas => {
            //jeigu varotojas nerastas duomenų bazėj
            
            if(!vartotojas.length){
                //paštas yra unikalus
            } else{
                //paštas yra panaudotas
                next(apiKlaidos.blogaUzklausa("Vartotojo paštas jau egzistuoja"));
                return;
            }
            //res.json(vartotojas.rows);
        });

    } else{
        // siunciam errora
        next(apiKlaidos.blogaUzklausa("Nėra įrašytas paštas arba slaptažodis"));
        return;
    }
});

function patvirtintiVartotoja(vartotojas){
    const tinkamasPastas = typeof vartotojas.pastas == 'string' &&
                                    vartotojas.pastas.trim() != '';
    const tinkamasSlaptazodis = typeof vartotojas.slaptazodis == 'string' &&
                                    vartotojas.slaptazodis.trim() != '' &&
                                    vartotojas.slaptazodis.trim().length >= 6;
    return tinkamasPastas && tinkamasSlaptazodis;
}


module.exports = router;