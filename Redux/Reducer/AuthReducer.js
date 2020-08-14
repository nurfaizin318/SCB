const initialState ={
    auth:"",
    name:"",
    address:"",
    number:"",
    email:"",
    position:""

}
const authReducer = (state=initialState,actions) =>{
        switch (actions.type) {
            case 'LOGIN':
                return{...state,auth:'isLogin',name:actions.name,address:actions.address,number:actions.number,email:actions.email,position:actions.position}
            case 'LOGOUT':
                return {...state,auth:'isLogout',name:"",address:"",number:"",email:"",position:""}
            default:
               return state;
        }
}

export default authReducer;