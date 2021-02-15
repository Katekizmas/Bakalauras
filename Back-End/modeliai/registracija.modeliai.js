const klientas = require("../konfiguracijos/serveris.konfiguracija");

module.exports = {
    gautiVienaPagalPasta: async function(pastas){
        const uzklausa = await klientas.query("SELECT * FROM vartotojas WHERE pastas = $1 LIMIT 1;", [pastas]);
        return uzklausa.rows;
    }
}