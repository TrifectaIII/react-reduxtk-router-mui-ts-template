import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import {
    Container,
    CssBaseline,
} from '@material-ui/core';
import {
    ThemeProvider,
    createMuiTheme,
    ThemeOptions,
} from '@material-ui/core/styles';

import Counter from './pages/Counter';
import NotFound from './pages/NotFound'
import Header from './components/Header';
import { useAppSelector } from './state/hooks';
import { selectDarkMode } from './state/globalSlice';

// set up dark and light themes
const lightThemeOptions: ThemeOptions = {
    palette: {
        type: 'light',
    },
}
const darkThemeOptions: ThemeOptions = {
    palette: {
        type: 'dark',
    },
}

// Main App component
const App = (): JSX.Element => {

    // choose theme based on state
    const darkMode = useAppSelector(selectDarkMode);
    const theme = createMuiTheme(
        darkMode ? darkThemeOptions : lightThemeOptions
    );

    return (
        // provider theme
        <ThemeProvider theme={theme}>

            {/* normalize css */}
            <CssBaseline />

            {/* include header on every page */}
            <Header />

            {/* main page contents in container */}
            <Container>
                {/* route based on url */}
                <Router>
                    <Switch>

                        {/* main page */}
                        <Route 
                            exact path='/' 
                            component={Counter} 
                        />

                        {/* default to 404 */}
                        <Route component={NotFound} />

                    </Switch>
                </Router>
            </Container>
        </ThemeProvider>
    );
}

export default App;
