import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import Landing from './Components/Landing/landing';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom';
import AgMain from './Dashboards/Agent/agMain';
import ClMain from './Dashboards/Client/clMain';
import AdMain from './Dashboards/Admin/adMain';
import SignIn from './Auth/signin';

const App = ()=>{
  return(
    <Routes>
      <Route exact path = '/' element = {<Landing />} />
      <Route path = 'login' element = {<SignIn />} />
      <Route exact path = '/dashboardAg' element = {<AgMain />} />
      <Route exact path = '/dashboardCl' element = {<ClMain />} />
      <Route exact path = '/dashboardAd' element = {<AdMain />} />
      
    </Routes>
  )
}


ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
document.getElementById('root'));

