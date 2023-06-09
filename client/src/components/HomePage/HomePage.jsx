import React, { Fragment } from "react";
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getDogs, filterDogsFrom, getTemperaments, filterDogsByTemperament, filterALPorNOW, filterUPorDOWN} from '../../redux/actions'
import { Link } from "react-router-dom";
import Dog from "../Dog/Dog";
import Paginated from "../Paginated/Paginated";
import SearchBar from "../SearchBar/SearchBar";
import HPStyle from "./HomePage.module.css";

export default function Home() {
    const dispatch = useDispatch()
    const allDogs =useSelector((state) => state.dogs)
    const temperaments =  useSelector((state) => state.temperaments)
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

    const paginated = (pagNum) => {
        setCurrentPage(pagNum)
    }

    useEffect (() => {
        dispatch(getDogs());
    }, [dispatch])

    useEffect(() => {
        dispatch(getTemperaments());
    },[dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getDogs());
    //     dispatch(getActivities());
    //     currentCountries = allCountries
    }

    function handleFilterFrom(e) {
        dispatch(filterDogsFrom(e.target.value))
        paginated(1)
    }    

    function handleFilterTemperament(e) {
        dispatch(filterDogsByTemperament(e.target.value))
        paginated(1)
    }

    function handleOrderTwo(e) {
        dispatch(filterALPorNOW(e.target.value))
        paginated(1)   
    }

    function handleOrderOne(e) {
        dispatch(filterUPorDOWN(e.target.value))
        paginated(1) 
    }

    return(
        <div className={HPStyle.container}>
            <div className={HPStyle.hd}>
                <h1>Henry Dogs App </h1>
                <Link to='/formPage'  className={HPStyle.margin} ><button className={HPStyle.bt}>Create Dog</button></Link>
                
                <SearchBar
                paginated ={paginated}
                className={HPStyle.bt}
                /> 
            </div>
            <div className={HPStyle.order} >
                <button onClick={e =>{handleClick(e)}} className={HPStyle.bt} >
                Refresh List
                </button>

                <select onChange={e => handleFilterTemperament(e)} className={HPStyle.marg1}>  
                    <option value="" disabled selected hidden>Choose a Temperament</option>
                    <option value="All">All</option>
                        {temperaments.map(tp => 
                            <option key={tp.id} value={tp.name}>{tp.name}</option>    
                        )}
                </select>
            
                <select onChange={e => handleOrderTwo(e)} className={HPStyle.marg1} >
                    <option value="none">none</option>
                    <option value="wei">Weight</option>
                    <option value="alph">A-Z order</option>
                </select>
                
                <select onChange={e => handleOrderOne(e)} className={HPStyle.marg1} >
                    <option value="none">none</option>
                    <option value="up">To Up</option>
                    <option value="down">To Down</option>
                </select>
            
                
                <select onChange={e => handleFilterFrom(e)} className={HPStyle.marg1} >
                    <option value="" disabled selected hidden>Choose Dogs data from</option>
                    <option value="All">All</option>
                    <option value="DB">Data Base</option>
                    <option value="API">API</option>
                </select>
            </div>
                
                
                
                <Paginated 
                    countriesPerPage={dogsPerPage}
                    allCountries={allDogs.length}
                    paginated ={paginated}
                />
            <div className ={HPStyle.dog}>
                {currentDogs?.map((dog)=>{
                    return(
                        <Fragment className ='dog'  >
                        <Link to={"/home/" + dog.id} className={HPStyle.Link} >
                        
                        <Dog name={dog.name}  image={dog.image} temperament={dog.temperament? dog.temperament : dog.temperaments} key={dog.id} weight={dog.weight} />
                        </Link>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    )
}
