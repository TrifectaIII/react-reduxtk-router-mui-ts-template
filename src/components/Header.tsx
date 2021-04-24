import React from 'react';

import {
    AppBar,
    Toolbar,
    // Button,
    Typography,
    // IconButton,
    Switch,
    makeStyles,
} from '@material-ui/core';
import { 
    // Menu as MenuIcon,
    Brightness3 as MoonIcon,
    Brightness7 as SunIcon,
} from '@material-ui/icons';

import { useAppSelector, useAppDispatch } from '../state/hooks';
import { selectDarkMode, toggleDarkMode } from '../state/globalSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    }
}));

// Main page header for navigation, global state
const Header = (props: {}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();
    const darkMode = useAppSelector(selectDarkMode);

    return (
        <AppBar
            position='static'
            className={classes.root}
        >
            <Toolbar>
                {/* <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton> */}
                <Typography 
                    variant="h4"
                    className={classes.title}
                >
                    Placeholder
                </Typography>
                <Switch
                    checked={darkMode}
                    onChange={()=>dispatch(toggleDarkMode())}
                    color='default'
                />
                {darkMode 
                    ? <MoonIcon onClick={()=>dispatch(toggleDarkMode())} /> 
                    : <SunIcon onClick={()=>dispatch(toggleDarkMode())} />
                }
                {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
        </AppBar>
    );
}

export default Header;