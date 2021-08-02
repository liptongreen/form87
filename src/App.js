
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FormsCreatePage from './components/formsCreatePage';
import MainPage from './components/mainPage';
import React from 'react';

class App extends React.Component {
  render () {
    
    return (
      <Router>

        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/forms" component={FormsCreatePage} exact />
          <Route
            render={() => (
              <h1 margin="0 auto" padding="100px 100px">
                Page not found
              </h1>
            )}
          />
        </Switch>
      </Router>
 
  );
    }
}

export default App;