import {FETCH_ALL_OPTION_FOR_DROPDOWN} from '../constants/actionTypes';
const dropdownlistReducer =(dropdowndata=[],action)=>{

    switch(action.type){
        case FETCH_ALL_OPTION_FOR_DROPDOWN:
            return action.payload;
           
        default:
            return dropdowndata;

    }
} 

export default  dropdownlistReducer;