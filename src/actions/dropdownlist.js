import {FETCH_ALL_OPTION_FOR_DROPDOWN} from '../constants/actionTypes'
import * as api from '../api'


//action creators 

export const getOptionLists =()=>async(dispatch)=>{

    try {
        const {data}= await api.fetchOptionLists();
        
       
        // console.log(data)
        // console.log("after modification response object ");
      const grades =  data.grades.map(e => { return { key: e._id, text: e.grade,value: e.grade }})
      const projectcodes =  data.projectcodes.map(e => { return { key: e._id, text: `${e.projdesc} ${e.projectCode}`,value: e.projectCode }})
        // console.log({grades,projectcodes})
      
        dispatch({type:FETCH_ALL_OPTION_FOR_DROPDOWN  ,payload:{grades,projectcodes}});

    } catch (error) {
        console.log(error.message)
    }

    // const action = {type: 'FETCH_ALL' ,payload:[]}
    // dispatch(action)
}