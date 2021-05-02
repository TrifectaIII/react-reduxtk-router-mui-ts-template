import React from 'react';
import {Link} from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    // List,
    // ListItem,
    // ListItemIcon,
    // ListItemText,
    Tooltip,
    makeStyles,
} from '@material-ui/core';
import {
    Brightness3 as MoonIcon,
    Brightness7 as SunIcon,
    Menu as MenuIcon,
} from '@material-ui/icons';
import clsx from 'clsx';

import {
    MobileOnly,
    // DesktopOnly,
} from './helpers';
import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectDarkMode,
    toggleDarkMode,
    openMenuDrawer,
} from '../state/globalSlice';
import {NavMap} from '../types';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    white: {
        color: theme.palette.common.white,
    },
    title: {
        textDecoration: 'none',
        borderRadius: '0.5rem',
        padding: '0.5rem 1rem',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
    },
    right: {
        'marginLeft': 'auto',
    },
}));

// Main page header for navigation, global state
const Header = (props: {
    navMap: NavMap,
}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();
    const darkMode = useAppSelector(selectDarkMode);

    const DarkModeIcon = darkMode ? SunIcon : MoonIcon;

    return (
        <AppBar
            position='static'
            className={classes.root}
        >
            <Toolbar>

                <MobileOnly>

                    <IconButton
                        edge='start'
                        className={classes.white}
                        onClick={() => dispatch(openMenuDrawer())}
                    >
                        <MenuIcon color='inherit' />
                    </IconButton>

                </MobileOnly>

                <Link
                    to='/'
                    className={clsx(classes.title, classes.white)}
                >
                    <Typography variant='h5'>
                        Placeholder
                    </Typography>
                </Link>

                {/* right side */}
                <Tooltip
                    title={darkMode ? 'Light Mode' : 'Dark Mode'}
                    className={classes.right}
                >
                    <IconButton
                        edge='end'
                        className={classes.white}
                        onClick={() => dispatch(toggleDarkMode())}
                    >
                        <DarkModeIcon />
                    </IconButton>
                </Tooltip>

            </Toolbar>
        </AppBar>
    );

};

export default Header;
