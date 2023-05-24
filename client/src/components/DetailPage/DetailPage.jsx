import React from "react";
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDogByDetail }from '../../redux/actions';
import {Link} from "react-router-dom";
import dPstyle from "./DetailPage.module.css"

export default function DetailPage(props) {

    

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(getDogByDetail(props.match.params.id));
    }, [dispatch])

    const dog = useSelector( (state) => state.detail)  
    
    // // const temperament = dog[0].temperament
    // let tp ='not data';
    // if (temperament === undefined){tp = 'not data'}
    // else{
    // if(typeof temperament[0] === 'string'){tp = temperament.join(", ")}
    // if (typeof temperament[0] !== 'string' && temperament !== undefined) {
    //     if (temperament.length === 1) {
    //         tp = temperament[0].name
    //     }else{
    //         for (let i = 0; i < temperament.length; i++) {
    //             temperament[i]= temperament[i].name
    //         }
    //         tp = temperament.join(", ")
    //     }
    // }}

    // // const tem = dog[0].temperament? dog[0].temperament : dog[0].temperaments;
    // // let tp ='not data'
    
    // // if(typeof tem[0] === 'string'){tp = tem.join(", ")}
    // // if (typeof tem[0] !== 'string' && tem !== undefined) {
    // //     if (tem.length === 1) {
    // //         tp = tem[0].name
    // //     }else{
    // //         for (let i = 0; i < tem.length; i++) {
    // //             tem[i]= tem[i].name
    // //         }
    // //         tp = tem.join(", ")
    // //     }
    // // }
    
        console.log(dog[0]?.temperament )

    
    return(
        <div className={dPstyle.container} >
            
            {dog.length>0?
                <div className={dPstyle.card}>
                
                    <img src={dog[0].image} alt="not found" className={dPstyle.imag} />
                    <div>
                        <h1>{dog[0].name}</h1>
                        <h2>Weight: {dog[0].weight}</h2>
                        <h2>Height: {dog[0].height}</h2>
                        <h2>Life Span: {dog[0].life_span}</h2>
                        <h2>Temperament: {dog[0]?.temperament} </h2>
                    </div>
                </div> 
            : <p className={dPstyle.p1}>Looading...</p>
            }

            <Link to= '/home'  >
                <button className={dPstyle.bt} >Return to Home Page</button>
            </Link>
 
         </div>

    )    
}

