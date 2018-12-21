import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Home extends Component{
  render(){
    return <div>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>{" "}
              </li>
              <li>
                <Link to="/Happy">Happy</Link>{" "}
              </li>
              <li>
                <Link to="/Guilty">Guilty</Link>{" "}
              </li>
              <li>
                <Link to="/Sleepy">Sleepy</Link>{" "}
              </li>
            </ul>
            <Route path="/Happy" component={Happy} />
            <Route path="/Guilty" component={Guilty} />
            <Route path="/Sleepy" component={Sleepy} />
          </div>
        </Router>
      </div>;
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
