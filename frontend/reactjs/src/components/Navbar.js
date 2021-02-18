import React, { Component } from 'react'
import Post from './Post'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
export default class Navbar extends Component {

    render() {
        return (
            <Router>
                
                <div>
                    <li>
                    <Link to="/">Home</Link>
                </li>
                <Link to = '/Post' activeClassName='active-menu'> Post </Link>
            </div>
                <Switch>
                    <Route exact path="/">
                         <Home />
                    </Route>
                    <Route path="/Post">
                <Post />
                </Route>
            </Switch>
        </Router>
            
        )
    }
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}