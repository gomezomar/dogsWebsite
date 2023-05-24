import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postDog, getTemperaments } from '../../redux/actions';
import FPStyle from "./FormPage.module.css";

export default function FormPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const temperaments = useSelector((state) => state.temperaments)
    const [errors, setErrors] =useState({});

    const [input, setInput] =useState({
        image: "https://previews.123rf.com/images/ghenadie/ghenadie1704/ghenadie170400037/76873629-conjunto-de-perros-de-perrito-de-dibujos-animados-simple-ilustraci%C3%B3n-vectorial.jpg",
        name: "",
        minHeight: "",
        maxHeight: "",
        minWeight: "",
        maxWeight: "",
        life_span: "",
        temperamentsId : [] 
    })

    useEffect(() => {
        dispatch(getTemperaments());
    },[]);

    function handleChangeName(e){
        setInput({
            ...input,
            [e.target.name] :e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name] : e.target.value
        }))
         console.log(input)
    }

    function handleChangeMinW(e){
        setInput({
            ...input,
            [e.target.name] :e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
        
    }

    function handleChangeMaxW(e){
        setInput({
            ...input,
            [e.target.name] :e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
        
    }

    function handleChangeMinH(e){
        setInput({
            ...input,
            [e.target.name] :e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
        
        
    }

    function handleChangeMaxH(e){
        setInput({
            ...input,
            [e.target.name] :e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
        
        
    }

    function handleChangeLifeSpan(e){
        setInput({
            ...input,
            [e.target.name] :e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }

    function handleSelect(e){
        setInput({
                ...input,
                temperamentsId: [ ...input.temperamentsId, e.target.value]
            })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }))
        
        console.log(input)
    }

    
    function handleDelete(id) {
        setInput({
            ...input,
            temperamentsId: input.temperamentsId.filter(tp => tp !== id)
        })    
    }


    function handleSubmit(e) {
        
        if (!input.name ||!input.minHeight ||!input.maxHeight ||!input.minWeight ||!input.maxWeight || !input.life_span || input.temperamentsId.length === 0) {
            alert("Fill in all required fields and Select at least one Temperament")
            
        }else{
            dispatch(postDog(input))
            alert("Activity Created!")
            setInput({
                image: "",
                name: "",
                minHeight: "",
                maxHeight: "",
                minWeight: "",
                maxWeight: "",
                life_span: "",
                temperamentsId: []  
            })
            history.push('/home')
        }
    }

    function validation(input) {
        let errors= {};
        if (!input.name) {
            errors.name ='A name Dogs Breed  is requeried'
        }
        if (!input.minHeight) {
            errors.minHeight ='Select a min Height'    
        }
        if (input.maxHeight && input.minHeight && input.minHeight >= input.maxHeight ) {
            errors.minHeight ='min Height has to be smaller than  max Height '    
        }
        if (!input.maxHeight) {
            errors.maxHeight ='Select a max Height'    
        }
        if (!input.minWeight) {
            errors.minWeight ='Select a min Weight'    
        }
        if (input.maxWeight && input.minWeight && input.minWeight >= input.maxWeight ) {
            errors.minWeight ='min Weight has to be smaller than  max Height '    
        }
        if (!input.maxWeight) {
            errors.maxWeight ='Select a max Weight'    
        }

        if (!input.life_span) {
            errors.life_span =' Insert years of Life Span'    
        }
        if (input.temperamentsId.length === 0) {
            errors.temperamentsId ='At least one temperament is requeried'    
        }
        return errors    
    }

    return(
        <div className={FPStyle.container}>
            
            <div className={FPStyle.card}>
                <h1>Create Dog Breed</h1>    
                <form onSubmit={ (e) => handleSubmit(e)}>
                    <div>
                        <label>Name Dog Breed:  </label>
                            <input
                            type="text"
                            value={input.name}
                            name = "name"
                            onChange={handleChangeName}
                            className={FPStyle.marg1}
                            />
                        {errors.name && (
                            <p className='error'>{errors.name}</p>
                        )}
                    </div>
                    <h3>Weight:</h3>
                    <div>
                        <label>Min Weight: (in kg):  </label>
                            <input
                            type="number"
                            min="1" max="50"
                            value={input.minWeight}
                            name = "minWeight"
                            onChange={handleChangeMinW}
                            className={FPStyle.marg1}
                            />
                        <label className={FPStyle.marg2} >Max Weight: (in kg):  </label>
                        <input
                        type="number"
                        min="1" max="50"
                        value={input.maxWeight}
                        name = "maxWeight"
                        onChange={handleChangeMaxW}
                        className={FPStyle.marg1}
                        />
                        {errors.minWeight && (
                            <p className='error'>{errors.minWeight}</p>
                        )}
                    {errors.maxWeight && (
                        <p className='error'>{errors.maxWeight}</p>
                    )}
                </div>
                <div>
                    <h3>Height:</h3>
                    <label>Min Height: (in cm):  </label>
                        <input
                        type="number"
                        min="1" max="150"
                        value={input.minHeight}
                        name = "minHeight"
                        onChange={handleChangeMinH}
                        className={FPStyle.marg1}
                    />
                    <label className={FPStyle.marg2} >Max Height: (in cm):  </label>
                        <input
                        type="number"
                        min="1" max="150"
                        value={input.maxHeight}
                        name = "maxHeight"
                        onChange={handleChangeMaxH}
                        className={FPStyle.marg1}
                    />
                    {errors.minHeight && (
                        <p className='error'>{errors.minHeight}</p>
                    )}
                    {errors.maxHeight && (
                        <p className='error'>{errors.maxHeight}</p>
                    )}
                </div>
                <div>
                    <h3>Life Spand (in years):</h3>
                    <label>Life spand:  </label>
                        <input
                        type="number"
                        min="1" max="20"
                        value={input.life_span}
                        name = "life_span"
                        onChange={handleChangeLifeSpan}
                        />
                    {errors.life_span && (
                        <p className='error'>{errors.life_span}</p>
                    )}
                </div>
                <div>
                <h3>Temperaments:</h3>
                    <select onChange={(e) => handleSelect(e)}>
                        <option value="" disabled selected hidden>Choose some temperaments</option>
                        {temperaments.map(tp => 
                            <option key={tp.id} value={tp.name}>{tp.name}</option>    
                        )}
                    </select>
                    {errors.temperamentsId && (
                        <p className='error'>{errors.temperamentsId}</p>
                    )}   
                    
                </div>
                <button type="submit" className={FPStyle.bt2} >Create Dog Breed</button>
            </form>
            <div className={FPStyle.tpm}>
            {input.temperamentsId.map(id =>
                <div className={FPStyle.cr}>
                <button onClick={() => handleDelete(id)} className={FPStyle.x} >x</button>
                <p className={FPStyle.pc}>{id}</p>
                </div> 
                )}
            </div>    
            </div>
            <Link to='/home'><button className={FPStyle.bt} >Return Home Page</button></Link>
        </div>

    )



 }


