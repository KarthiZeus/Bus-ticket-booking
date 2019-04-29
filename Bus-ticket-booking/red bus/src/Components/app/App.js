import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../../Containers/login-page';


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={Login} />>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;