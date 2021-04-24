import React from 'react';
import {
    Link,
} from 'react-router-dom';

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
        
    },
    title: {
        color: theme.palette.common.white,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    right: {
        marginLeft: 'auto',
    },
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
                <Link 
                    to='/' 
                    className={classes.title} 
                >
                    <Typography variant="h4">
                        Placeholder
                    </Typography>
                </Link>
                <Switch
                    checked={darkMode}
                    onChange={()=>dispatch(toggleDarkMode())}
                    color='default'
                    className={classes.right}
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