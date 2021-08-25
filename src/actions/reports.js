import {FETCH_ALL,FETCH_REPORT} from '../constants/actionTypes'
import * as api from '../api'


//action creators 

export const getOptionLists =()=>async(dispatch)=>{

    try {
        const {data}= await api.fetchOptionLists();
        
        console.log("response object ");
        console.log(data)
        console.log("after modification response object ");
      const arr =  data.map(e => { return { key: e._id, text: e.grade,value: e.grade }})
        console.log(arr)
       // const {data}= await api.fetchOptionLists()
        dispatch({type: FETCH_ALL ,payload:arr});

    } catch (error) {
        console.log(error.message)
    }

    // const action = {type: 'FETCH_ALL' ,payload:[]}
    // dispatch(action)
}

export const fetchReportData =(formData)=>async(dispatch)=>{
 
    try{
  
       const {data}= await api.report(formData);
     //  console.log("Report received from backend")
       //console.log(data)
        dispatch({type: FETCH_REPORT ,payload:data});
    }
    catch(error){
        console.log(error.message);
    }
}





