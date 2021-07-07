import React,{ useState} from 'react'
import {GoogleLogin} from 'react-google-login'

import Input from './Input'

import { Message } from 'semantic-ui-react'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'

import '../../App.css'
// import Icon from './icon'

import {signup,signin} from '../../actions/auth'

const initialState ={  firstName :'',
                        lastName:'',
                        email:'',
                        password:'',
                        confirmPassword:''
                    }

const Auth = () => {

 //error

 const error = useSelector(state => state.errorReducer.error);

 const[dismissError,setDismissError]=useState(true)
    const [showPassword,setShowPassword] = useState(false);
    const [isSignup,setIsSignup]=useState(false);
    const [formData,setFormData]=useState(initialState)
    const dispatch = useDispatch();
    const history = useHistory()
   // const isSignup= true


  const handleDismiss = () => {
      setDismissError(false)
     
  }

    const handleShowPassword =()=>{
        setShowPassword((prevShowPassword)=> !prevShowPassword )
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setDismissError(true)
      //  console.log(formData)
        if(isSignup){
            dispatch(signup(formData,history))
        }else{
            dispatch(signin(formData,history))
        }

    }
    const handleChange=(e)=>{

        setFormData({...formData,[e.target.name]:e.target.value})

    }

    const switchMode =()=>{
       // setIsSignup(!isSignup)
        setIsSignup((prevIsSignup)=>!prevIsSignup);
       // handleShowPassword(false)
        setShowPassword(false)
    }

  const  googleSuccess = async (res)=>{
      //optional chaining operator ?.
      const result = res?.profileObj
      const token = res?.tokenId
    //   console.log('result = ',result);
    //   console.log(`token id = ${token}`);
      try {
          
        dispatch({type:'AUTH' ,data:{result,token}})
        //after successful login redirect to homepage/dashboard
        history.push('/dashboard')
      } catch (error) {
        console.log('error')
      //  history.push('/auth')
         
      }

  }
  const  googleFailure =(error)=>{

      console.log(error)
      console.log("Google sign in was unsuccessful. try again later")
    //  history.push('/auth')
  }
//   const mystyle = {
//     margin-right:-10rem;
//   };

    return (


        <div className="ui grid container">
              <div className="six wide column" id="sg"></div>
        <div className="three wide column"></div>
        <div className="five wide column">

        <h5 class="ui right aligned header" >
             <button onClick={switchMode}>
                    {isSignup ? 'Already a member? Sign In': 'Not a member ? Sign up'}
            </button>
          </h5>
        
           <div className="ui stackable column centered grid">
                <div className="column">
                     <h3 className="ui header">
                         <strong>
                         {isSignup ? 'Register to Dashboard': 'Login to Dashboard'}
                         
                         </strong>
                         </h3>

                        {/* showing errors */}
                       {  error && dismissError && <Message negative
                                    onDismiss={handleDismiss}
                                    content={error}
                                    />}
                     <form className="ui form" onSubmit={handleSubmit}>
                     {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )
                        }

                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword? 'text': 'password'}
                        handleShowPassword={handleShowPassword}
                        />
                        {isSignup &&  <Input name="confirmPassword" label="Retype Password" handleChange={handleChange} type='password' />}
                        
                        <button class="ui pink button" type="submit">
                        {isSignup ? 'Create Account' : 'Sign In'}
                            
                            </button>
                            <GoogleLogin
                        clientId="913450414201-duddi3q2p7c48787u6lmjpta7ugn1hlv.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <button className="ui google plus button"
                            onClick={renderProps.onClick} disabled={renderProps.disabled}
                            > 
                             <i class="google icon"></i>
                            Sign In using Google
                            </button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'
                    
                    />

                    </form>
      
               </div>
         </div>
    </div>
  </div>

       
    )
}

export default Auth
