import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import {
    Container,
    CssBaseline,
    ThemeProvider,
    createMuiTheme,
    ThemeOptions,
} from '@material-ui/core';

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
    const lightTheme = createMuiTheme(lightThemeOptions);
    const darkTheme = createMuiTheme(darkThemeOptions);
    const theme = darkMode ? darkTheme : lightTheme;

    return (
        // provider theme
        <ThemeProvider theme={theme}>

            {/* normalize css */}
            <CssBaseline />

                <Router>
                    {/* include header on every page always with light theme */}
                    <ThemeProvider theme={lightTheme}>
                        <Header />
                    </ThemeProvider>

                    {/* route based on url */}
                    <Container>
                        <Switch>
                            {/* main page */}
                            <Route 
                                exact path='/' 
                                component={Counter} 
                            />
                            {/* default to 404 */}
                            <Route component={NotFound} />
                        </Switch>
                    </Container>
                </Router>
        </ThemeProvider>
    );
}

export default App;
