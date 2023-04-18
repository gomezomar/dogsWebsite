import React from "react";
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getDogByDetail }from '../redux/actions';
import {Link} from "react-router-dom";

export default function DetailPage(props) {

    console.log(props)

    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(getDogByDetail(props.match.params.id));
    }, [dispatch])

    const dog = useSelector( (state) => state.detail)   
    // const tem = dog[0].temperament? dog[0].temperament : dog[0].temperaments;
    // let tp ='not data'
    
    // if(typeof tem[0] === 'string'){tp = tem.join(", ")}
    // if (typeof tem[0] !== 'string' && tem !== undefined) {
    //     if (tem.length === 1) {
    //         tp = tem[0].name
    //     }else{
    //         for (let i = 0; i < tem.length; i++) {
    //             tem[i]= tem[i].name
    //         }
    //         tp = tem.join(", ")
    //     }
    // }
    const prue =dog[0]
    console.log(prue)

    
    return(
        <div>
            <Link to= '/home' >
                <button>Home</button>
            </Link>
            {dog.length>0?
                <div>
                
                    <img src={dog[0].image} alt="not found" />
                    <div>
                        <h1>{dog[0].name}</h1>
                        <h2>Weight: {dog[0].weight}</h2>
                        <h2>Height: {dog[0].height}</h2>
                        <h2>Life Span: {dog[0].life_span}</h2>
                        {/* <h2>temperament: {tem} </h2> */}
                    </div>
                </div> 
            : <p>Looading...</p>
            } 
         </div>

    )    
}

