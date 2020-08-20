const initialState ={
    feed:[],
}
const FeedReducer = (state=initialState,action) =>{
        switch(action.type){
         
            case "DELETE_FEED" :
                return {...state,feed:state.feed.filter(res=>res.id !== action.payload)} 
            case "INSERT_FEED" :
                return { feed:[...state.feed,action.payload]}   
            case "EDIT_FEED":
                return {...state,feed:action.payload}
            case "RESET_FEED":
                return {...state,feed:[]}
        default : return state;
        }
}


export default FeedReducer;