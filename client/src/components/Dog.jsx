import React from "react";

export default function Dog({name, image, temperament, weight }) {
    console.log(temperament)
    let tp ='not data';
    if(typeof temperament[0] === 'string'){tp = temperament.join(", ")}
    if (typeof temperament[0] !== 'string' && temperament !== undefined) {
        if (temperament.length === 1) {
            tp = temperament[0].name
        }else{
            for (let i = 0; i < temperament.length; i++) {
                temperament[i]= temperament[i].name
            }
            tp = temperament.join(", ")
        }
    }
    
    return(
        <div>
            <img src={image} alt="img not found" />
            <h3>{name}</h3>
            <h5>Temperament:  {tp}</h5>
            <h5>Weight:  {weight}kg</h5>
        </div>
    )    
}