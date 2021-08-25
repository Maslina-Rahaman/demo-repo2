import {combineReducers} from 'redux'

 import report from './reports'
import auth from './auth'
import errorReducer from './error'
import dropdownlist from './dropdownlist'

export default combineReducers({
    auth,
    errorReducer,
    dropdownlist,
    report
})