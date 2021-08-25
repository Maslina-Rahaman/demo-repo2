import {FETCH_REPORT} from '../constants/actionTypes';
const reportReducer =(report=[],action)=>{

    switch(action.type){
     
            case FETCH_REPORT:
                return action.payload;
            default:
            return report;

    }
} 

export default reportReducer;