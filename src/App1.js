// import { Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
//import {Grid ,CircularProgress} from '@material-ui/core';
import React,{useState, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getOptionLists,fetchReportData} from './actions/reports'


const App=()=> {

  const reports= useSelector(state => state.reports)
 // console.log(reports)
 const [formData,setFormData] = useState({
  finyear:'',
  grd:[]
  
})
  const dispatch=useDispatch(); //hooks

  useEffect(()=>{
    dispatch(getOptionLists())
},[dispatch]);

const handleSubmit =(e)=>{
  e.preventDefault();
  //dispatch post request
 dispatch(fetchReportData(formData))

}

  return (

    <div className="ui grid">
        <div className="twelve wide column mg-tp">
          <h2 className="ui center aligned header">Employee Details Statement</h2>
              <div className="ui segment">

              <form className="ui form" noValidate onSubmit={handleSubmit}>      
                     <div className="four wide field">
                              <label>Financial Year</label>
                              <select name="finyear" className="ui fluid dropdown" 
                              
                            
                              onChange={(e)=>setFormData({...formData,finyear:e.target.value})}
                             
                              >
                                <option value="">Select one</option>
                              
                                <option value="2021" selected>2021</option>
                                  <option value="1920">1920</option>
                              </select>
                      </div>

                      {/* <div className="four wide field">
                          <label>Grade</label>
                          <select name="grd" className="ui fluid multiple search dropdown" 
                          multiple=""
                          onChange={(e)=>setFormData({ ...formData, grd:e.target.value})}
                      
                          >
                          <option value="">Select one or more</option>
                          {reports.map((data)=>(
                                  <option key={data._id} value={data.grade}>{data.grade}</option>
                                ))
                            }
                          // </select>
                    </div> */}

                       <div class="ui multiple selection dropdown">
                        <input name="grd" type="hidden" 
                         onChange={(e)=>setFormData({ ...formData, grd:e.target.value})}
                        />
                        <i class="dropdown icon"></i>
                        <div class="default text">Select one or more</div>
                        <div class="menu">
                        
                          {reports.map((data)=>(
                                  <div  class="item" key={data._id} data-value={data.grade}>{data.grade}</div>
                                ))
                            }
                          
                        </div>
                      </div>

                    <h2>select value is {formData.finyear }</h2>
                    {/* {
                      formData.grd.map((element)=>{
                       return <li>{element}</li>
                      })
                    } */}
                    <button type="submit" className="ui button primary">Submit</button>
                                              
              </form>

             </div>

         </div>

      </div>





            
      
  )
}

export default App;
