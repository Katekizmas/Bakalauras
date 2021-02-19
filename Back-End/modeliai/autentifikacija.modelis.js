const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const apiKlaidos = require("../klaidos/apiKlaidos");
const uzklausaAutentifikacija = require("../uzklausos/autentifikacija.uzklausa");
const middleware = require ("./middleware.modelis");
const auth = require("./sessionauth.modelis");



//gauti visus irasus
router.post("/", auth.patikrintiCookie, async(req, res) => {
    res.json({
        pranesimas: "zdarova"
    });
});


//Prisijungimo užklausos logika
router.post("/prisijungti", middleware.patikrintiArNeraPastas, async(req, res, next) => {
    //patikrinam slatažodį su hash slaptažodžiu
    bcrypt.compare(req.body.slaptazodis, req.vartotojas[0].slaptazodis).then(rezultatas => {
        //jeigu slaptažodžiai sutapo
        if(rezultatas){
            const saugomiDuomenys = 
            {
                id: req.vartotojas[0].id,
                pastas: req.vartotojas[0].pastas,
                role: req.vartotojas[0].role
            };

            auth.sukurtiCookie(saugomiDuomenys, res);
            res.json({
                id: req.vartotojas[0].id,
                pastas: req.vartotojas[0].pastas,
                role: req.vartotojas[0].role,
                pranesimas: "Sėkmingas prisijungimas"
            });

        } else{
            next(apiKlaidos.blogaUzklausa("Netinkamas slaptažodis"));
            return;
        }
    });
});

//Registracijos užklausos logika
router.post("/registruoti", middleware.patikrintiArYraPastas, async(req, res, next) => {
                //užkoduojam slaptažodį
                const koduotasSlaptazodis =  await bcrypt.hash(req.body.slaptazodis, 10);
                    //įtraukiam naują vartotoją į duomenų bazę
                    const vartotojas = 
                    {
                        vardas: req.body.vardas,
                        pavarde: req.body.pavarde,
                        telnr: req.body.telnr,
                        pastas: req.body.pastas,
                        slaptazodis: koduotasSlaptazodis
                        //sukurtimoData = new Date()
                    };
                    uzklausaAutentifikacija.sukurtiVartotoja(vartotojas).then(atsakymas => {
                        res.json({
                            id: atsakymas[0].id,
                            pranesimas: "Sukurtas vartotojas"
                        });
                    });
});

//Atsijungimo užklausos logika
router.post("/atsijungti", auth.istrintiCookie, async(req, res, next) => {
    res.json({
        pranesimas: "Sėkmingai atsijungėte"
    });
});

module.exports = router;