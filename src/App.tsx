import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';


import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { Counter } from './features/counter/Counter';

const TestComponent = () => {
    return (<>Hello!</>);
}

const App = () => {
    return (
        <Container className="App">
            <Typography
                align='center'
                variant='h4'
            >
                A starting point for web projects using React, Redux Toolkit, and Material-UI written in Typescript.
            </Typography>
            <Router>
                <Switch>
                    <Route exact path='/' component={Counter} />
                    <Route path='/alternate' component={TestComponent} />
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
