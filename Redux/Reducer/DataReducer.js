const initialState ={
  
    data:[{subData:[]}]

}


const InsertReducer = (state=initialState,action) =>
    {
        
        switch(action.type){
         
            case "ON_DELETE" :
                return {...state,data:state.data.filter(res=>res.id !== action.payload)} 

            case "INSERT_SUBDATA" :
                return { data:[...state.data,action.payload]}
            case "INSERT_DATA" :
                return { data:[...state.data,action.payload]}
            case "FETCH_DATA" :
                return {...state,data:action.payload}

            case "EDIT":
                return {...state,data:action.payload}
                
        default : return state;
            
        }

    }

export default InsertReducer;