const initialState ={
    recentData:"",
    id:"",
    organitation : "",
    actions : "",
    contact1 :"",
    contact2:"",
    progress:"",
    nextPlan:"",
    result:"",
    time:"",
    data:[]

}


const InsertReducer = (state=initialState,action) =>
    {
        
        switch(action.type){
            case "INPUT_ORGANITATION" :
                return {...state, organitation:action.payload1}
            case "INPUT_ACTIONS" :
                return {...state,actions:action.payload2}
            case "INPUT_CONTACTPERSON" :
                return {...state,contact1:action.payload3}
            case "INPUT_CONTACTPERSON2" :
                return {...state,contact2:action.payload6}
            case "INPUT_PROGRESS" :
                return {...state,progress:action.payload}
            case "INPUT_NEXTPLAN" :
                return {...state,nextPlan:action.payload4}
            case "INPUT_RESULT" :
                return {...state,result:action.payload5}
            case "INPUT_CLEAR"  :
                return {...state,organitation:"",actions:"",contact1:"",contact2:"",progress:"",nextPlan:"",result:"",}
            case "ON_DELETE" :
                return {...state,data:state.data.filter(res=>res.id !== action.payload)}            
            case "INPUT_INSERT" :
                let newData = { 
                    id : action.id,
                    organitation  :state.organitation,
                    actions: state.actions ,
                    contact1: state.contact1,
                    contact2:state.contact2,
                    progress:state.progress, 
                    nextPlan : state.nextPlan,
                    result:state.result,
                    time:action.timeNow}
                return { data:[...state.data,newData]}
            case "FETCH_DATA" :
                return {...state,data:action.payload}
            case "EDIT":
                return {...state,data:action.payload}
                
        default : return state;
            
        }

    }

export default InsertReducer;