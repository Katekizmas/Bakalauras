const {Pool} = require("pg")

const klientas = new Pool({
    user: "postgres",
    password: "niekalas16",
    database: "veterinarija",
    host: "localhost",
    port: 5432
});

module.exports = klientas;