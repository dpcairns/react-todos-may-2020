import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from "react-router-dom";
import Todos from './Todos.js';
import Login from './Login.js'
import SignUp from './SignUp.js'
import PrivateRoute from './PrivateRoute.js';

export default class App extends Component {
  state = { token: '' }

  handleTokenChange = (myToken) => {
    this.setState({ token: myToken });
    localStorage.setItem('TOKEN', myToken);
  }

  render() {
    console.log('=============================\n')
    console.log('|| this.state', this.state)
    console.log('\n=============================')
    return (
      <div>
        <Router>
          <ul>
            <Link to="/todos"><li>todos</li></Link>
            <Link to="/signup"><li>sign up</li></Link>
            <Link to="/login"><li>sign in</li></Link>
            <button onClick={() =>this.handleTokenChange('')}>logout</button>
          </ul>
          <Switch>
            <Route exact path='/login' render={(routerProps) => <Login 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps} />} 
              />
            <Route 
            exact path='/signup' 
              render={(routerProps) => <SignUp 
                handleTokenChange={this.handleTokenChange} 
                {...routerProps}/>} 
              />
            <PrivateRoute 
              exact 
              path='/todos' 
              token={this.state.token} 
              render={(routerProps) => <Todos 
              {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}
