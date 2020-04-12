const initialState = {
    isVisible : false,
    isVisible2:false
}

const ModalReducer = (state=initialState,action) =>
    {
        switch(action.type){
            case "MODAL_OPEN" :
                return {...state,isVisible:true}
            case "MODAL_CLOSE" :
                return {...state,isVisible:false}
            case "MODAL2_OPEN" :
                return {...state,isVisible2:true}
            case "MODAL2_CLOSE" :
                return {...state,isVisible2:false}
        default : return state;
            
        }

    }

export default ModalReducer;