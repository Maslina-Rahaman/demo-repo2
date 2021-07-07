import {SERVER_ERROR} from '../constants/actionTypes';


const initState = {
    error: null
   };
const errorReducer =(state = initState ,action)=>{
   

    switch(action.type){  
            case SERVER_ERROR:
                return {...state,error:action.payload}
            default:
                return state;
    }
}

export default errorReducer;