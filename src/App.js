// @flow
import React, { Component } from 'react';

import { HashRouter } from 'react-router-dom';
import Root from 'Root';
import { Provider } from 'react-redux';

import store from './store';


import 'resources/css/bootstrap.min.css';
import 'resources/css/font-awesome.min.css';
import 'resources/css/animate.min.css';
import 'resources/css/timeline.css';
import 'resources/css/cover.css';
import 'resources/css/login_register.css';
import 'resources/css/forms.css';
import 'resources/css/buttons.css';
import 'resources/css/user_detail.css';
import 'resources/css/profile4.css';
import 'resources/css/photos1.css';
import 'resources/css/friends.css';

class App extends Component {

    render() {
        return (
            <Provider store = { store }>
                <HashRouter>
                    <Root />
                </HashRouter>
            </Provider>
        );
    }
}


export default App;

