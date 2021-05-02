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
import {
    Filter as FilterIcon,
    Filter1 as Filter1Icon,
    Filter2 as Filter2Icon,
    Filter3 as Filter3Icon,
} from '@material-ui/icons';

import Main from './pages/MainPage';
import Counter from './pages/CounterPage';
import NotFound from './pages/NotFoundPage';
import Header from './components/Header';
import MenuDrawer from './components/MenuDrawer';
import {useAppSelector} from './state/hooks';
import {selectDarkMode} from './state/globalSlice';
import {NavMap} from './types';

// set up dark and light themes
// https://material-ui.com/customization/color/#playground
const lightThemeOptions: ThemeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#794BC4',
        },
        secondary: {
            main: '#e65100',
        },
    },
};
const darkThemeOptions: ThemeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#794BC4',
        },
        secondary: {
            main: '#e65100',
        },
    },
};

// Map of navigation points for header
const navMap: NavMap = {
    'Nav Point 1': {
        icon: Filter1Icon,
        route: '/np1',
    },
    'Nav Point Group': {
        icon: FilterIcon,
        children: {
            'Nav Point 2': {
                icon: Filter2Icon,
                route: '/np2',
            },
            'Nav Point 3': {
                icon: Filter3Icon,
                route: '/np3',
            },
        },
    },
};

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
                {/* include header and menu on every page */}
                <Header navMap={navMap} />
                <MenuDrawer navMap={navMap} />

                {/* route based on url */}
                <Container>
                    <Switch>
                        {/* main page */}
                        <Route
                            exact path='/'
                            component={Main}
                        />
                        {/* counter app */}
                        <Route
                            path='/counter'
                            component={Counter}
                        />
                        {/* default to 404 */}
                        <Route component={NotFound} />
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );

};

export default App;
