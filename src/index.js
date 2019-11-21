import './index.css'

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { Provider } from 'mobx-react';
import { SnackbarProvider } from 'notistack';
import routes from './configs/routes';
import stores from './stores';
import history from 'history.js';
import { configure } from 'mobx';

// configure({ enforceActions: 'observed' })

ReactDOM.render(
    <Router history={history}>
        <Provider {...stores}>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <App routes={routes}/>
                </SnackbarProvider>
            </ThemeProvider>
        </Provider>
    </Router>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

