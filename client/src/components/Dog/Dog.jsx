import React from "react";
import dogStyle from "./dogStyle.module.css";


export default function Dog({name, image, temperament, weight }) {
    console.log(temperament)
    let tp ='not data';
    if (temperament === undefined){tp = 'not data'}
    else{
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
    }}
    
    return(
        <div className={dogStyle.container}>
            <img src={image} alt="img not found" />
            <h3>{name}</h3>
            <h5>  Temperament:   {tp}</h5>
            <h5>Weight:  {weight}kg</h5>
        </div>
    )    
}