const { Router } = require('express');
require('dotenv').config();
const {Temperament} = require("../db");
const {getApiTemperaments} =require("../helpers/temperaments");


const router = Router();

router.get("/", async (req, res) => {
    const temperaments = await getApiTemperaments();
    temperaments.forEach(tp=> {
        Temperament.findOrCreate({
            where: {name: tp}
        })
    });
    const allTemperaments = await Temperament.findAll();
    res.status(200).send(allTemperaments);
});


module.exports = router;