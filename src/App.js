import './App.css';
import Header from './Header'
import React, {useEffect} from 'react';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './Login';
import Loginselector from './LoginSelector';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import HospitalInfo from './pages/hospitalinfo/HospitalInfo';
import UserInfo from './pages/userinfo/UserInfo';
import HospitalHome from './pages/hospitalHome/HospitalHome';
import UserHome from './pages/userHome/UserHome';


function App() {
const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>>", authUser);

      if(authUser){

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {

        dispatch({
          type: 'SET_USER',
          user: null
        })
        

      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/logintest">
            <Loginselector/>
          </Route>
          <Route path = "/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path = "/hospitalinfo">
            <Header />
            <HospitalInfo/>
          </Route>
          <Route path = "/userinfo">
            <Header />
            <UserInfo/>
          </Route>
          <Route path = "/hospitalhome">
            <Header />
            <HospitalHome/>
          </Route>
          <Route path = "/userhome">
            <Header />
            <UserHome/>
          </Route>
          <Route path = "/">
            <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
