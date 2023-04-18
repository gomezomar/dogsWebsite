const initialState ={
    dogs : [],
    allDogs:[],
    temperaments: [],
    detail : [],
    temperament: "",
    from: "",
    alpORwei: "",
    upORdown: ""
}

function rootReducer(state = initialState, action){
    switch (action.type) {
        case 'GET_DOGS':
            return{
                ...state,
                dogs:  action.payload,
                allDogs:  action.payload,
                temperament: 'All',
                from: 'All',
                alpORwei:'none',
                upORdown: 'none'
            }
        case 'GET_NAME_DOGS':
            return{
                ...state,
                dogs: action.payload

            }
        case 'GET_DETAIL_DOG':
            return{
                ...state,
                detail: action.payload
    
            }
        case 'GET_TEMPERAMENTS':
            return{
                ...state,
                temperaments: action.payload
            }
        case 'FILTER_BY_FROM':
            let all = state.allDogs;
            let DogsFlt =[];

            if ( action.payload === 'All') { DogsFlt =  all}
            if ( action.payload === 'DB') { DogsFlt =  all.filter(dog => dog.createdInDb === true)}
            if (action.payload === 'API') { DogsFlt =  all.filter(dog => dog.createdInDb !== true)}
            
            
           

        


            return{
                ...state,
                from: action.payload,
                dogs: DogsFlt
            }
        case 'FILTER_BY_TEMPERAMENT':
            let aDogs = state.allDogs;
            let DogsFiltered = [];
            if ( action.payload !== 'All'){
                for (let i = 0; i < aDogs.length; i++) {
                    if (aDogs[i].temperament !== undefined) {
                        let torF= aDogs[i].temperament.includes(action.payload)
                        if (torF) {
                            DogsFiltered.push(aDogs[i]);
                        }
                    }
                }
            }else{ DogsFiltered = aDogs; }

            if ( state.from === 'All') {  DogsFiltered =   DogsFiltered}
            if ( state.from === 'DB') {  DogsFiltered =   DogsFiltered.filter(dog => dog.createdInDb === true)}
            if ( state.from === 'API') {  DogsFiltered =   DogsFiltered.filter(dog => dog.createdInDb !== true)}



            return{
                ...state,
                temperament: action.payload,
                dogs: DogsFiltered
            }
        
        case 'ORDER_ALPORNOW':
            return{
                ...state,
                alpORwei: action.payload
            }

        case 'ORDER_UPORDOWN':
            let ordered;
            let alph = state.alpORwei;
            console.log(alph)

            if (alph === 'none') {
                return{
                    ...state,
                    upORdown : action.payload,
                }
                
            } 
            
            if (state.alpORwei === 'alph'){  

                ordered =action.payload === 'up' ?
                state.dogs.slice().sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)):
                state.dogs.slice().sort((a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0))
            }
            if (state.alpORwei === 'wei'){ 

                ordered =action.payload === 'up' ?
                state.dogs.slice().sort((a,b) => (a.weight.substring(0, 2) - b.weight.substring(0, 2))) :
                state.dogs.slice().sort((a,b) => (a.weight.substring(0, 2) - b.weight.substring(0, 2))).reverse()
            }
            return{
                    ...state,
                    dogs: ordered,
                    upORdown : action.payload,
                }
            

        case 'POST_DOG':
            return{
                ...state,
            }  

        default: 
        return state;
    }

}

export default rootReducer