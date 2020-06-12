const initialState ={
    auth:''
}
const authReducer = (state=initialState,actions) =>{
        switch (actions.type) {
            case 'LOGIN':
                return{...state,auth:'isLogin'}
            case 'LOGOUT':
                return {...state,auth:'isLogout'}
            default:
               return state;
        }
}

export default authReducer;