const axios = require('axios');
require('dotenv').config();
const {API_KEY} = process.env;

const getApiTemperaments = async() =>{
  const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  let temperaments = await apiUrl.data.map(tp => tp.temperament);
  temperaments.forEach((tp, index) => {
      if (tp !== undefined) {
          let temp = tp.split(", ");
          tp = temp.join(",");
          temperaments[index]= tp;
      };
  });
  temperaments.filter((tp) => tp !== '').sort(undefined);
  let tpString= temperaments.join(",");
  temperaments = tpString.split(",");
 
  for(var i = temperaments.length -1; i >=0; i--){
      if(temperaments.indexOf(temperaments[i]) !== i) temperaments.splice(i,1);
    };
  
  return temperaments.filter(tp => tp !== '').sort();
};

module.exports = {
  getApiTemperaments,
};