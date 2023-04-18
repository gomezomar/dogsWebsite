const { Router } = require('express');
const axios = require('axios');
require('dotenv').config();
const {Dog, Temperament} = require("../db");
const { getAllDogs } =require("../helpers/dogs");

const router = Router();

router.get("/", async (req, res) => {
  let name = req.query.name;
  let dogs = await getAllDogs();
    if(name){
        name = name.toLowerCase();
        const dog = await dogs.filter(ch => 
            ch.name.toLowerCase().includes(name)
        );
        dog.length ?
        res.status(200).send(dog) :
        res.status(404).send('ups! Dog not found');
    }else{
        res.status(200).send(dogs);
    }
    
});


router.get("/:id", async(req, res) =>{
  const  idDog = req.params.id;
    const dogs = await getAllDogs();
    const dog = dogs.filter(br => br.id == idDog);
    if (dog.length) {
        res.status(200).json(dog);
    }else{
        res.status(404).send('ups! Dog not found');
    }
    
});



router.post("/", async(req, res) =>{
  
  let {
    image,
    name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    life_span,
    temperamentsId
  }= req.body;
   
  let height = minHeight + ' - ' + maxHeight;
  let weight = minWeight + ' - ' + maxWeight;
  life_span = life_span + ' years'
console.log({ image, name, height, weight, life_span,})
  let dogCreate = await Dog.create ({
    image,
    name,
    height,
    weight,
    life_span,
  });

  for (let i = 0; i < temperamentsId.length; i++) {
    // console.log(cts)
    // console.log(countriesId[i])
    const temperament= await Temperament.findAll({
      where: {
        name: temperamentsId[i],
      },
    });
      console.log(temperament.data);
      const dog = await dogCreate.addTemperament(temperament);
  }
  res.send('Dog created')

});

  module.exports = router;