import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Sign from './pages/sign/sign.component'
import Header from './components/header/header.component'
import {auth} from './firebase/firebase.utils'


class App extends React.Component{
  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (

      <div> 
        <Header currentUser={this.state.currentUser}/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/sign' component={Sign}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;