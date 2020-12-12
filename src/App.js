import React, {useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Footer from './Components/Footer';
import Payment from './Components/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

// stripe publishable api key 
const promise = loadStripe('pk_test_51HxMB8BHjTQ3QEGM4VcKnyjCcZ5kWgAsszp1rO6m5ZiQKgUQYstdrQOvxA1UziqHZ5N5HH1LFcRnXO3XlECwacKK00e4e8z72W');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run once when app loads 
    // checking for auth 
    auth.onAuthStateChanged(authUser => {
      console.log('User >> ', authUser);

      if (authUser) {
        // user logged in or was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      } else {
        // the user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    return () => {
      
    }
  }, [])

  return (
    <div className="app">
      <Router>
        {/* putting header outside renders it always  */}
        
        <Switch>
          {/* login page  */}
        <Route path='/login'>            
            <Login />
          </Route>
          {/* path to checkout */}
          <Route path='/checkout'>  
            <Header />          
            <Checkout />
          </Route>

          {/* payment route  */}
          <Route path='/payment'>  
            <Header /> 

            {/* surround payment with elements and pass promise = apikey  */}
            <Elements  stripe={promise}>
              <Payment/>
            </Elements>
            
          </Route>

          {/* / renders header and home and is put last so when route not found drops to this default  */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* <Footer /> */}
        
      </Router>
      
    </div>
  );
}

export default App;
