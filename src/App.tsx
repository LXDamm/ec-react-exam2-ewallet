import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.scss';
import AddCard from './pages/AddCard';
import Cards from './pages/Cards';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="page">
            <Switch>
              <Route path="/cards">
                <Cards />
              </Route>
              <Route path="/addcard">
                <AddCard />
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
