import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

 const PrivateRoute=({children,...rest})=> {
    return (
        <Route {...rest}  render={()=>{
            return '1' === 2 ? Dashboard :<Redirect to="/home" />
        }} />


    )
}
export default PrivateRoute;


 