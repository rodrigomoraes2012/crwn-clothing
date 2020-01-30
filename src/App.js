import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/hats' component={HatsPage}/>
          <Route exact path='/jackets' component={HatsPage}/>
          <Route exact path='/sneakers' component={HatsPage}/>
          <Route exact path='/womens' component={HatsPage}/>
          <Route exact path='/mens' component={HatsPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
