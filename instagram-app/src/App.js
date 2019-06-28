import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import { AppWrapper } from './components/Reusable/App';
class App extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <AppWrapper>

                <PostsPage />
                
            </AppWrapper>
        );
    }
}

export default Authenticate(App);