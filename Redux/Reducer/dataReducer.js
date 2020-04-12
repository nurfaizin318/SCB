const initialState ={
    recentData:"",
    id:"",
    organitation : "",
    actions : "",
    contactPerson :"",
    contactPerson2:"",
    progress:"",
    nextPlan:"",
    result:"",
    time:"",
    data:[]

}

var date = new Date()

const InsertReducer = (state=initialState,action) =>
    {
        
        switch(action.type){
            case "INPUT_ORGANITATION" :
                return {...state, organitation:action.payload1}
            case "INPUT_ACTIONS" :
                return {...state,actions:action.payload2}
            case "INPUT_CONTACTPERSON" :
                return {...state,contactPerson:action.payload3}
            case "INPUT_CONTACTPERSON2" :
                return {...state,contactPerson2:action.payload6}
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
            var date = new Date();
            var id = date.getTime();
            var dates = date.getDate();
            var month = date.getMonth() + 1; //Current Month
            var year = date.getFullYear(); //Current Year
            var times= date.toLocaleTimeString();

            var TimeNow = dates +'/'+month+'/'+year +' '+times;
            
                let newData = { 
                    id : dates+id,
                    organitation  :state.organitation,
                    actions: state.actions ,
                    contact: state.contactPerson,
                    progress:state.progress, 
                    nextPlan : state.nextPlan,
                    result:state.result,
                    time:TimeNow}
                    console.log(state.data)
                return {...state,data: data.concat(newData)}
            
        default : return state;
            
        }

    }

export default InsertReducer;