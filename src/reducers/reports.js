import {FETCH_ALL,FETCH_REPORT} from '../constants/actionTypes';
const reportReducer =(reports=[],action)=>{

    switch(action.type){
        case FETCH_ALL:
            return action.payload;
            case FETCH_REPORT:
                return action.payload
        default:
            return reports;

    }
} 

export default reportReducer;