import React from 'react';
import LandingPage from './LandingPage';
import Resume from './Resume';
import Contact from './Contact';
import Aboutme from './Aboutme';
import Projects from './Projects';
import {Switch ,Route} from 'react-router-dom';
const Main =()=>(
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/Aboutme" component={Aboutme} />
    <Route exact path="/Projects" component={Projects} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Resume" component={Resume} />
    
  </Switch>
);
export default Main;
