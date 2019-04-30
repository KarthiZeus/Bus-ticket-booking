import React from 'react';
import logo from './logo.svg';
import './login-page.css';
import { connect } from 'react-redux';
import * as LoginActions from '../Actions/index';
import { bindActionCreators } from 'redux';
import Login from '../Components/login/login';
class LoginPage extends React.Component {
    actionTestFn = () => {
        this.props.actions.testaction({
            busName: 'KPN'
        });
    }
    render() {
        console.log('sampleData', this.props.sampleData);
        return (
            <div className="App">
                <header className="App-header">
                    <Login />
                    <button onClick={() => this.actionTestFn()}>ActionDispatcher</button>
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                </a>
                </header>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sampleData: state.sample
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(LoginActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
