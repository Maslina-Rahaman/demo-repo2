import React,{useState,useEffect}from "react";
import {Link , useHistory, useLocation} from 'react-router-dom'

import decode from 'jwt-decode'
import {useDispatch} from 'react-redux'

const Navbar = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    // const user=null;
  ///  item from localstorage
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
   
  const logout=()=>{

      dispatch({type:'LOGOUT'})
      history.push('/')
      setUser(null)
  }
  useEffect(()=>{
    const token = user?.token;
    //JWT...
    //checking for expired token
    if(token){
        const decodedToken = decode(token);

        if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
},[location]);

    return (
        <div className="ui fluid vertical inverted menu">
            <div className="item">
                <img
                    className="ui image"
                    alt="Profile pic"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjfGJgu0VZ42L7iNGyIxB_GdwObjRn_8wXJg&usqp=CAU"
                />
            </div>
            <a href="/#" className="item">
                <i className="home icon"></i> Dashboard
            </a>
            <a href="/#" className="item">
                <i className="edit icon"></i> Edit Profile
            </a>
            <a href="/#" className="item">
                <i className="calendar alternate outline icon"></i> Leave &
                Attendance
            </a>
            <a href="/#" className="item">
                <i className="dollar sign icon"></i> Payroll
            </a>
            <a href="/#" className="item">
                <i className="users sign icon"></i> Employee Database
            </a>
            <Link to="/report" className="item">
                <i className="table icon"></i> Report
            </Link>
            <div className="item space"></div>
            <Link to="/auth" className="bottom item"  onClick={logout}>
                <i className="sign out alternate icon"></i>Logout
            </Link>
        </div>
    );
};

export default Navbar;
