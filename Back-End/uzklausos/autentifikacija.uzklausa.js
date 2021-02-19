const klientas = require("../konfiguracijos/serveris.konfiguracija");

module.exports = {
    gautiVienaPagalPasta: async function(pastas){
        const uzklausa = await klientas.query("SELECT * FROM vartotojas WHERE pastas = $1 LIMIT 1;",
        [pastas]);
        return uzklausa.rows;
    },
    sukurtiVartotoja: async function(vartotojas){
        const uzklausa = await klientas.query("INSERT INTO vartotojas(vardas, pavarde, telnr, pastas, slaptazodis, role) VALUES($1, $2, $3, $4, $5,  'USER') RETURNING id;",
        [vartotojas.vardas, vartotojas.pavarde, vartotojas.telnr, vartotojas.pastas, vartotojas.slaptazodis]);
        return uzklausa.rows;
    },
    gautiSesija: async function(SESIJOS_ID){
        const uzklausa = await klientas.query("SELECT * FROM sesija WHERE id = $1;",
        [SESIJOS_ID]);
        return uzklausa.rows;
    },
    /*atnaujintiSesija: async function(sesijosID, vartotojasPastas){
        const uzklausa = await klientas.query("UPDATE sesija SET id = $1, galiojimoLaikas = (CURRENT_TIMESTAMP + (7 ||' days')::interval) WHERE pastas = $2;",
        [sesijosID, vartotojasPastas]);
        return uzklausa.rows;
    },*/
    sukurtiSesija: async function(SESIJOS_ID, vartotojas){
        const uzklausa = await klientas.query("INSERT INTO sesija (id, vartotojas_fkey, pastas, role, galiojimolaikas) values ($1, $2, $3, $4, (CURRENT_TIMESTAMP + (7 ||' days')::interval));",
        [SESIJOS_ID, vartotojas.id, vartotojas.pastas, vartotojas.role]);
        return uzklausa.rows;
    },
    istrintiSesija: async function(SESIJOS_ID){
        const uzklausa = await klientas.query("DELETE FROM sesija WHERE id = $1;",
        [SESIJOS_ID]);
        return uzklausa.rows;
    },
}