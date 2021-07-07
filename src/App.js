import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Auth from './components/Auth/Auth'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Report from './components/Reports/Report'
// import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const App =()=>{

    return (
        <BrowserRouter>
                <Switch>
                     <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/report" exact component={Report} />
                </Switch>
            
        </BrowserRouter>
        
    )
}

export default App;