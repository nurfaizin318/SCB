const initialState = {
    Screen:"Home"
}

const TabReducer = (state=initialState,action) =>
    {
        switch(action.type){
            case "LIBRARY" :
                return {...state,Screen : "library"}
            case "HOME" :
                return {...state,Screen : "Home"}

        default : return state;
            
        }

    }

export default TabReducer;