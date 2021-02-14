const express = require("express");
const cors = require("cors");
const klientas = require("./duomenuBaze-Prisijungimas");


const programa = express();
const PORT = process.env.PORT || 6900;

programa.use(cors());
programa.use(express.json());


//Importuoti maršrutai


//Uzklausos perkelt sita vieta i folderi ;)

//Naujas irasas
programa.post("/gydytojas", async(req,res) => {
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
programa.get("/gydytojas", async(req,res) => {
    try{
        const uzklausa = await klientas.query("SELECT * from testas;");
        res.json(uzklausa.rows);
    }catch(klaida){
        res.status(404).json({ pranesimas : klaida });
    }
});

//gauti specifini irasa
programa.get("/gydytojas/:gaunamasId", async(req,res) => {
    try{
        const { gaunamasId } = req.params;
        const uzklausa = await klientas.query("SELECT * FROM testas WHERE id = $1", [gaunamasId]);
        res.json(uzklausa.rows);
    }catch(klaida){
        res.status(404).json({ pranesimas : klaida });
    }
});

//atnaujinti irasa
programa.put("/gydytojas/:gaunamasId", async(req,res) => {
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
programa.delete("/gydytojas/:gaunamasId", async(req,res) => {
    try{
        const { gaunamasId } = req.params;
        const uzklausa = await klientas.query("DELETE FROM testas WHERE id = $1",
        [gaunamasId]);
        res.status(200).json({ pranesimas : "Sėkmingai atnaujinta" });
    }catch(klaida){
        res.status(404).json({ pranesimas : klaida });
    }
});

//Klausomės įvado
programa.listen(PORT, () =>{
    console.log("Serveris pradėjo darbą:", PORT);
});

/*
programa.post("/", async(req,res) => {
    try{
        res.status(200).json();
    }catch(klaida){
        res.status(404).json({ pranesimas : klaida });
    }
});
*/