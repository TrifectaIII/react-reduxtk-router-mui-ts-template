import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Container from '@material-ui/core/Container';

import Counter from './pages/counter/Counter';
import NotFound from './pages/notFound/NotFound'
import Header from './components/Header';

const App = (): JSX.Element => {
    return (
        <>
        <Header />
        <Container>
            <Router>
                <Switch>
                    <Route 
                        exact path='/' 
                        component={Counter} 
                    />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </Container>
        </>
    );
}

export default App;
