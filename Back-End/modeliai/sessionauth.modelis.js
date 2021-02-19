const crypto = require("crypto");
const apiKlaidos = require("../klaidos/apiKlaidos");
const uzklausaAutentifikacija = require("../uzklausos/autentifikacija.uzklausa");


//req.vartotojoDuomenys = vartotojoDuomenys;
//const authHeader = req.headers['authorization'];
//const token = authHeader && authHeader.split(' ')[1];
//su situo patikrinam ar jis sesijosid yra duomenu bazej


//Kiekviena karta siunčiam šitą, kai vartotojas bando gauti duomenis
async function patikrintiCookie(req, res, next) {
    const SESIJOS_ID = req.cookies.SESIJOS_ID;
    if (SESIJOS_ID) {
        //Jeigu SESIJOS_ID cookie yra header'į tikrinam duomenų bazėj
        console.log("Iškviesta užtikrinti sesija funkcija...")
        uzklausaAutentifikacija.gautiSesija(SESIJOS_ID).then(sesija => {
        if(sesija.length){
            const duomenys = 
            {
                id: sesija[0].vartotojas_fkey,
                pastas: sesija[0].pastas,
                role: sesija[0].role,
            }
            req.SESIJOS_ID = duomenys;
            next();
        } else{
            next(apiKlaidos.blogasTokenas("Nerastas SESIJOS_ID cookie duomenų bazėje"));
            return;
        }
    });
    } else{
        next(apiKlaidos.neautorizuotasVartotojas("Nerastas SESIJOS_ID cookie header'į"));
        return;
    }
}

//Siunčiam šitą kai vartotojas prisijungia
async function sukurtiCookie(saugomiDuomenys, res){
    //Kiekviena karta vartotojui prisijungus, sukuriame naują SESIJOS_ID
    //CIA REIKES IS TOS REGISTER FUNKCIJOS RETURNING DUOMENU PASIIMT ID !!!!!!!!!!!!!!!!!!
    const SESIJOS_ID = crypto.randomBytes(64).toString('hex');
    sukurtiPuslapioCookie(SESIJOS_ID, res);
    uzklausaAutentifikacija.sukurtiSesija(SESIJOS_ID, saugomiDuomenys); // cia bus ne req.body o req.kazkas
    
}

//Siunčiam šitą kai vartotojas paspaudžia atsijungti mygtuką
function istrintiCookie(req, res, next){
    //Atsijungus vartotojui ištriname SESIJOS_ID
    const SESIJOS_ID = req.cookies.SESIJOS_ID;
    if (SESIJOS_ID) {
        uzklausaAutentifikacija.istrintiSesija(SESIJOS_ID);
        res.clearCookie("SESIJOS_ID");
        next();
        return;
    } else {
        next(apiKlaidos.blogasTokenas("Nerastas Sesijos_ID cookie header'į"));
        return;
    }
}



function sukurtiPuslapioCookie(SESIJOS_ID, res){
    res.cookie("SESIJOS_ID", SESIJOS_ID, {
        httpOnly: true,
        secure: false, //poto pakeisti kai veiks i true
        //samesite lax
    });
}

module.exports = {
    patikrintiCookie,
    sukurtiCookie,
    istrintiCookie
};