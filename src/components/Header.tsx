import React from 'react';

import {
    AppBar,
    Toolbar,
    Button,
    Typography,
    IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Menu as MenuIcon,
    Brightness3 as MoonIcon,
    Brightness7 as SunIcon,
} from '@material-ui/icons';

import { useAppSelector, useAppDispatch } from '../state/hooks';
import { selectDarkMode, toggleDarkMode } from '../state/globalSlice';

const useStyles = makeStyles({
    root: {
        margin:'0',
    }
});

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
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    News
                </Typography>
                <IconButton 
                    color="inherit" 
                    onClick={()=>dispatch(toggleDarkMode())}
                    aria-label="toggle-dark-mode"
                >
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </IconButton>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;