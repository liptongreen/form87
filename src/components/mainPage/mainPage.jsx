import React from 'react';
import {Link} from "react-router-dom";
 
class MainPage extends React.Component {
    render(){
        return(
            <div className="App">
            <header className="App-header">
              <Link to="/forms" className="App-link button">
                      Forms
              </Link>
            </header>
            </div>
        )
    }
}

export default MainPage;