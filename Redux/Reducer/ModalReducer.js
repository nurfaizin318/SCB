const initialState = {
    isVisible : false
}

const ModalReducer = (state=initialState,action) =>
    {
        switch(action.type){
            case "MODAL_OPEN" :
                return {...state,isVisible:true}
            case "MODAL_CLOSE" :
                return {...state,isVisible:false}

        default : return state;
            
        }

    }

export default ModalReducer;