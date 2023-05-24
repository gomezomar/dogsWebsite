import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../redux/actions";
import sbStyle from "./SearchBar.module.css";

export default function SearchBar({paginated}) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    
    function handleInputChange(e) {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
        
    }

    function handleSumit(e) {
        e.preventDefault()
        dispatch(getNameDogs(name))
        paginated(1)
    }


    return(
        <div>
            <input 
            type="text" 
            placeholder="search Dog Breed..."
            onChange={(e) => handleInputChange(e)}
            />
            <button type="submit" onClick={(e)=> handleSumit(e)}className={sbStyle.bt}>Search</button>

        </div>
    )
    
}
