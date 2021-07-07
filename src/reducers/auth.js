import {AUTH,LOGOUT} from '../constants/actionTypes';

const authReducer =(state={authData:null},action)=>{
    switch(action.type){
        case AUTH:
         
            //saving the details inside local storage so that browser knows the user is logged in
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
   
            return {...state,authData:action?.data}
        case LOGOUT:
                localStorage.clear();
                return {...state,authData:null}
            default:
                return state;
    }
}

export default authReducer;