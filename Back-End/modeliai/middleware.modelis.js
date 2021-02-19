//const express = require('express');
const uzklausaAutentifikacija = require("../uzklausos/autentifikacija.uzklausa");
const klientas = require("../konfiguracijos/serveris.konfiguracija");
const apiKlaidos = require("../klaidos/apiKlaidos");


function patikrintiArYraPastas(req, res, next){
    //
    if(patvirtintiVartotoja(req.body)){

        uzklausaAutentifikacija.gautiVienaPagalPasta(req.body.pastas).then(vartotojas => {
            //jeigu vartotojas nerastas duomenų bazėj
            
            if(!vartotojas.length){
                //paštas yra unikalus
                //req.vartotojas = vartotojas;
                next();
                return;
            } else{
                next(apiKlaidos.blogaUzklausa("Vartotojo paštas jau egzistuoja"));
                return;
            }
        });

    } else{
        //jeigu neatitinka reikalavimų iš patikrintiVartotoja
        next(apiKlaidos.blogaUzklausa("Nėra įrašytas paštas arba slaptažodis"));
        return;
    }
}

function patikrintiArNeraPastas(req, res, next){
    //
    if(patvirtintiVartotoja(req.body)){

        uzklausaAutentifikacija.gautiVienaPagalPasta(req.body.pastas).then(vartotojas => {
            //jeigu vartotojas nerastas duomenų bazėj
            
            if(vartotojas.length){
                //paštas yra unikalus
                req.vartotojas = vartotojas;
                next();
                return;
            } else{
                next(apiKlaidos.blogaUzklausa("Vartotojas nerastas"));
                return;
            }
        });

    } else{
        //jeigu neatitinka reikalavimų iš patikrintiVartotoja
        next(apiKlaidos.blogaUzklausa("Nėra įrašytas paštas arba slaptažodis"));
        return;
    }
}





function patvirtintiVartotoja(vartotojas){
    const tinkamasPastas = typeof vartotojas.pastas == 'string' &&
                                    vartotojas.pastas.trim() != '';
    const tinkamasSlaptazodis = typeof vartotojas.slaptazodis == 'string' &&
                                    vartotojas.slaptazodis.trim() != '' &&
                                    vartotojas.slaptazodis.trim().length >= 6;
    return tinkamasPastas && tinkamasSlaptazodis;
}

module.exports = {
    patikrintiArYraPastas,
    patikrintiArNeraPastas
};