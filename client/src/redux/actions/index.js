import axios from 'axios';

export function getDogs(){
    return async function(dispatch){
        var json =await axios.get("http://localhost:3001/dogs", {
        });

        return dispatch({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function getTemperaments(){
    return async function(dispatch){
        var json =await axios.get("http://localhost:3001/temperaments", {
        });

        return dispatch({
            type: 'GET_TEMPERAMENTS',
            payload: json.data
        })
    }
}

export function getNameDogs(name) {
    return async function (dispatch) {
        try {
            var json =await axios.get("http://localhost:3001/dogs?name=" + name)
            return dispatch({
                type: 'GET_NAME_DOGS',
                payload: json.data
            })
        } catch (error) {
            console.log(error)    
        }    
    }
}

export function getDogByDetail(id){
    return async function(dispatch){
        try {
            var json =await axios.get("http://localhost:3001/dogs/" + id);
            return dispatch({
                type: 'GET_DETAIL_DOG',
                payload: json.data
            })
        } catch (error) {
            console.log(error)    
        }    
    }
}



export function filterDogsFrom(payload) {
    
    return {
        type: 'FILTER_BY_FROM',
        payload
    }
}

export function filterDogsByTemperament(payload) {
    
    return {
        type: 'FILTER_BY_TEMPERAMENT',
        payload
    }
}

export function filterALPorNOW(payload) {
    
    return {
        type: 'ORDER_ALPORNOW',
        payload
    }
}

export function filterUPorDOWN(payload) {
    
    return {
        type: 'ORDER_UPORDOWN',
        payload
    }
}




export function postDog(payload){
    return async function(dispatch){
        var response =await axios.post("http://localhost:3001/dogs",payload);
        console.log(response)
        return response;
    }
}