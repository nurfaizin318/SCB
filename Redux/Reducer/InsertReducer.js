const initialState ={
    recentData:"",
    organitation : "",
    actions : "",
    contactPerson :"",
    progress:"",
    nextPlan:"",
    result:"",
    isEditable:false,
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
                return {...state,contactPerson:action.payload3}
            case "INPUT_PROGRESS" :
                return {...state,progress:action.payload}
            case "INPUT_NEXTPLAN" :
                return {...state,nextPlan:action.payload4}
            case "INPUT_RESULT" :
                return {...state,result:action.payload5}
            case "INPUT_CLEAR"  :
                return {...state,organitation:"",actions:"",contactPerson:"",progress:"",nextPlan:"",result:"",}
            case "ON_OTHERS" :
                return {...state,isEditable:!isEditable,nextPlan:""}
            case "INPUT_INSERT" :
                let newData = {organitation  :state.organitation,actions: state.actions ,contact: state.contact,progress:state.progress, nextPlan : state.nextPlan,result:state.result}
                console.log(newData )
                return {...state,data: data.concat(newData),}
            
        default : return state;
            
        }

    }

export default InsertReducer;