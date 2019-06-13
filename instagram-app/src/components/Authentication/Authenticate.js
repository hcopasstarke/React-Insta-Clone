import React from 'react';
import LoginPage from '../Login/Login';

const Authenticate = App =>
    class extends React.Component {
        constructor() {
            super();

            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem('username') && localStorage.getItem('password')) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        }

        render() {
            if (this.state.loggedIn) { return <App /> }
            else { return <LoginPage /> }
        }
    }

export default Authenticate;