const initialState ={
    organitation : "",
    actions : "",
    contactPerson :"",
    progress:"",
    nextPlan:"",
    result:""

}

const InsertReducer = (state=initialState,action) =>
    {
        switch(action.type){
            case "INPUT_ORGANITATION" :
                return {...state,organitaion:action.payload}
            case "INPUT_ACTIONS" :
                return {...state,actions:action.payload}
            case "INPUT_CONTACTPERSON" :
                return {...state,contactPerson:action.payload}
            case "INPUT_PROGRESS" :
                return {...state,progress:action.payload}
            case "INPUT_NEXTPLAN" :
                return {...state,nextPlan:action.payload}
            case "INPUT_RESULT" :
                return {...state,result:action.payload}
        default : return state;
            
        }

    }

export default InsertReducer;