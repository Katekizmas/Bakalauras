const express = require('express');
const router = express.Router();

const klientas = require("../konfiguracijos/serveris.konfiguracija");
const apiKlaidos = require("../klaidos/apiKlaidos");



router.post("/", async(req,res) => {
    try{
        const { aprasymas } = req.body;
        const uzklausa = await klientas.query("INSERT INTO testas(vardas) VALUES($1) RETURNING *;", 
        [aprasymas]);
        res.json(uzklausa.rows);
    }catch(klaida){
        res.status(404).json({ pranesimas : klaida });
    }
});

//gauti visus irasus
router.get("/", async(req, res, next) => {
    try{
        const uzklausa = await klientas.query("SELECT * from testas;");
        res.json(uzklausa.rows);
        /*if(uzklausa){
            res.json(uzklausa.rows);
        } else {
            apiKlaidos.blogaUzklausa("Va toki ;)");
            return;
        }*/
        
    }catch(klaida){
        console.log(klaida);
        res.status(404).json({ pranesimas : klaida });
    }
});

//gauti specifini irasa
router.get("/:gaunamasId", async(req,res) => {
    try{
        const { gaunamasId } = req.params;
        const uzklausa = await klientas.query("SELECT * FROM testas WHERE id = $1", [gaunamasId]);
        res.json(uzklausa.rows);
    }catch(klaida){
        res.status(404).json({ pranesimas : klaida });
    }
});

//atnaujinti irasa
router.put("/:gaunamasId", async(req,res) => {
    try{
        const { gaunamasId } = req.params;
        const { aprasymas } = req.body;
        const uzklausa = await klientas.query("UPDATE testas SET vardas = $1 WHERE id = $2",
        [aprasymas, gaunamasId]);
        res.status(200).json({ pranesimas : "Sėkmingai atnaujinta" });
    }catch(klaida){
        res.status(404).json({ pranesimas : klaida });
    }
});

//istrinam irasa
router.delete("/:gaunamasId", async(req,res) => {
    try{
        const { gaunamasId } = req.params;
        const uzklausa = await klientas.query("DELETE FROM testas WHERE id = $1",
        [gaunamasId]);
        res.status(200).json({ pranesimas : "Sėkmingai atnaujinta" });
    }catch(klaida){
        res.status(404).json({ pranesimas : klaida });
    }
});
module.exports = router;