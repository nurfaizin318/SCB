const initialState ={
    organitation : "",
    actions : "",
    contactPerson :"",
    progress:"",
    nextPlan:"",
    result:"",
    index1:"",
    index2:""

}

const InsertReducer = (state=initialState,action) =>
    {
        switch(action.type){
            case "INPUT_ORGANITATION" :
                return {...state, organitation:action.payload}
            case "INPUT_ACTIONS" :
                return {...state,actions:action.payload,index1:action.pay}
            case "INPUT_CONTACTPERSON" :
                return {...state,contactPerson:action.payload}
            case "INPUT_PROGRESS" :
                return {...state,progress:action.payload}
            case "INPUT_NEXTPLAN" :
                return {...state,nextPlan:action.payload,index2:action.pay}
            case "INPUT_RESULT" :
                return {...state,result:action.payload}
            case "INPUT_CLEAR"  :
                return {...state,organitation:"",actions:"",contactPerson:"",progress:"",nextPlan:"",result:"",index1:"",index2:""}
            
        default : return state;
            
        }

    }

export default InsertReducer;