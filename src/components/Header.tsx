import React from 'react';
import { Link } from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    Typography,
    Switch,
    Box,
    makeStyles,
} from '@material-ui/core';
import { 
    Brightness3 as MoonIcon,
    Brightness7 as SunIcon,
} from '@material-ui/icons';

import { 
    useAppSelector, 
    useAppDispatch,
} from '../state/hooks';
import { 
    selectDarkMode, 
    toggleDarkMode, 
} from '../state/globalSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    title: {
        color: theme.palette.common.white,
        textDecoration: 'none',
        borderRadius: '0.5rem',
        padding: '0.5rem 1rem',
        '&:hover': {
            // textDecoration: 'underline',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
    },
    right: {
        marginLeft: 'auto',
    },
    dmToggle: {
        cursor: 'pointer',
        borderRadius: '0.5rem',
        padding: '0.5rem 1rem',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
    },
}));

// Main page header for navigation, global state
const Header = (props: {}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();
    const darkMode = useAppSelector(selectDarkMode);

    const DarkModeIcon = darkMode ? MoonIcon : SunIcon;

    return (
        <AppBar
            position='static'
            className={classes.root}
        >
            <Toolbar>
                <Link 
                    to='/' 
                    className={classes.title} 
                >
                    <Typography variant="h5">
                        Placeholder
                    </Typography>
                </Link>

                {/* right side */}
                <Box className={classes.right}>
                    <Box 
                        alignItems='center'
                        justifyContent='center'
                        display='flex'
                        onClick={()=>dispatch(toggleDarkMode())}
                        className={classes.dmToggle}
                    >
                        <Switch
                            checked={darkMode}
                            color='default'
                        />
                        <DarkModeIcon />
                    </Box>
                </Box>
               
            </Toolbar>
        </AppBar>
    );
}

export default Header;