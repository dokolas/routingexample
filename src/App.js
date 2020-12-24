import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Effects from './components/Effects/Effects';
import Strains from './components/Strains/Strains';
import StrainsDetail from './components/StrainDetail/StrainDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/about' component={About} /> 
          <Route path='/effects' exact component={Effects} /> 
          <Route path='/effects/:id' component={Strains} /> 
          <Route path='/strains/:id' component={StrainsDetail} /> 
        </Switch>    
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
