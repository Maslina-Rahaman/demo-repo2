import {AUTH,SERVER_ERROR} from '../constants/actionTypes'
import * as api from '../api/index'
 

export const signin =(formData,history)=>async(dispatch)=>{
    try {
        //sign in the user
     
        const {data}=await api.signIn(formData);
        dispatch({type:AUTH,data})
        history.push('/dashboard');
    } catch (error) {
        console.log(error.response.data)
        dispatch({type:SERVER_ERROR,payload:error.response.data})
       
    }

}

export const signup =(formData,history)=>async(dispatch)=>{
    try {
        //sign up the user
    
               const {data} =await api.signUp(formData);
       
        dispatch({type:AUTH,data})
    
        history.push('/dashboard')
    } catch (error) {
        console.log(error)
    }

}

