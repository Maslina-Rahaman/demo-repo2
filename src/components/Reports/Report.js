
import React,{useState, useEffect} from 'react'
import {Grid, Form ,Segment,Header,Loader,Dimmer } from 'semantic-ui-react';
import {useSelector, useDispatch} from 'react-redux';

import Navbar from "../Dashboard/Navbar"
import GridReport from "../Grid/GridReport"
import {getOptionLists} from '../../actions/dropdownlist'
import {fetchReportData} from '../../actions/reports'

const initialState ={  finYear:1920,
                        projectCode:[],
                        designation:[],
                        qualification:[],
                        grade:[]
                     
                    }
const finYearOptions = [
  { key: 1920, text: '1920', value: 1920 },
  { key: 2021, text: '2021', value: 2021 },
  { key: 2122, text: '2122', value: 2122 }
]

const Report=()=> {

  const [formData,setFormData]=useState(initialState);
  const [isformSubmitted,setFormSubmitted]=useState(false)
  const dispatch = useDispatch();
  const grades= useSelector(state => state.dropdownlist.grades);
  const projectcodes = useSelector(state => state.dropdownlist.projectcodes);
  const reports= useSelector(state => state.report);
  console.log("value of data")
  console.log(!reports.report?.length)
  //console.log("inside Report component");
  //console.log(reports);  
//  console.log(reports?.report.length); 
 useEffect(()=>{
      dispatch(getOptionLists())
 },[dispatch])


 useEffect(()=>{
   //performing side effects
  dispatch(fetchReportData(formData))

},[isformSubmitted])

  
const handleChange = (e, data) => {

  setFormData({...formData, [data.name]: data.value})
 // setFormData({...formData,[e.target.name]:e.target.value})
  // this.setState({
  //   [data.name]: data.value
  // });
};

const handleSubmit =(e)=>{
 e.preventDefault();
 setFormSubmitted(true);
//pass the form data as props to GridReport component
//dispatch(fetchReportData(formData))
// clear();
}
const clear=()=>{
  
  setFormData({
    finYear:2021,
    projectCode:[],
    designation:[],
    qualification:[],
    grade:[]
  });

}


    return (
    
      isformSubmitted ? !reports.report?.length? (<Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>):
      <GridReport reports={reports.report} />:  ( <Grid stackable columns={2}>
              <Grid.Row>
                  <Grid.Column width={3}>
                      <Navbar />
                  </Grid.Column>
                <Grid.Column width={13}>
              
                <Segment>
                <Header as='h2' textAlign='center'>Employee Details Statement</Header>
                  {/* {
                   
                    isformSubmitted ? 
                    !reports.report?.length? (
                      <Dimmer active inverted>
                      <Loader inverted>Loading</Loader>
                    </Dimmer>
              
                    ):
                    <GridReport reports={reports.report} />: */}
                    <Form onSubmit={handleSubmit} size='small'>
                            <Form.Group widths='equal'>
                              <Form.Dropdown label="Financial Year" placeholder="Select" name="finYear"  search selection options={finYearOptions} value={formData.finYear} onChange={handleChange}/>
                             <Form.Dropdown label="Project Code" placeholder="Select one or more" name="projectCode"  multiple search selection options={projectcodes || []} value={formData.projectCode} onChange={handleChange}/> 
                              {/*  <Form.Dropdown label="Designation" placeholder="Select one or more" name="designation"   multiple search selection options={options} value={formData.designation} onChange={handleChange}/>       
                              <Form.Dropdown label="Degree" placeholder="Select one or more" name="qualification"   multiple search selection options={options} value={formData.qualification} onChange={handleChange}/>        */}
                              <Form.Dropdown label="Grade" placeholder="Select one or more" name="grade"   multiple search selection options={grades||[]} value={formData.grade} onChange={handleChange}/>       
                            </Form.Group>
                             <Form.Button type="submit" primary floated='right'>Submit</Form.Button>
                         
                    </Form>
                      
                  {/* }
                 */}
                     
                      </Segment>
                  </Grid.Column>
                </Grid.Row>
          </Grid> ) 
                
    )
}

export default Report
