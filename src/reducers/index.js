import {combineReducers} from 'redux'

// import reports from './reports'
import auth from './auth'
import errorReducer from './error'
import dropdownlist from './dropdownlist'

export default combineReducers({
    auth,errorReducer,dropdownlist
})