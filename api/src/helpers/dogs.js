const axios = require('axios');
require('dotenv').config();
const {Dog, Temperament} = require("../db");
const {API_KEY} = process.env;

const getApiInfo = async() =>{
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
    const apiInfo = await apiUrl.data.map(ch =>{
        if (ch.temperament !== undefined) {
            return{
                id: ch.id,
                name: ch.name,
                height: ch.height.metric,
                weight: ch.weight.metric,
                image: ch.image.url,
                life_span: ch.life_span,
                temperament: ch.temperament.split(', '),
            };    
        } else {
            
            return{
                id: ch.id,
                name: ch.name,
                height: ch.height.metric,
                weight: ch.weight.metric,
                image: ch.image.url,
                life_span: ch.life_span,
                temperament: ch.temperament
            };  
        }
        
    });
    return apiInfo;
};

const getDBinfo = async() => {
    return await Dog.findAll({
        include:{
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    })
};

const getAllDogs = async () => {
    const apiInfo =await getApiInfo();
    const dbInfo = await getDBinfo();
    const allBreeds = apiInfo.concat(dbInfo);
    return allBreeds;
};


module.exports = {
    getApiInfo,
    getDBinfo,
    getAllDogs,
 };