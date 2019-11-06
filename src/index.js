
import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ReactDOM from 'react-dom';
import App from './components/app';
import Movie from './components/movie';
import './index.css';



export default function Main() {
  return (
    <Router>
      <div>
        <nav className = "grey darken-4">
          <ul>
            <li>
                <Link to="/">Movies</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/movies/:id" component = {Movie}/>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));
