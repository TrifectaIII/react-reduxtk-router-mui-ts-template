import React from 'react';
import {
    Link,
} from 'react-router-dom';

import {
    AppBar,
    Toolbar,
    Typography,
    Switch,
    makeStyles,
} from '@material-ui/core';
import { 
    Brightness3 as MoonIcon,
    Brightness7 as SunIcon,
    NavigateNext as RightArrowIcon,
} from '@material-ui/icons';

import { 
    useAppSelector, 
    useAppDispatch 
} from '../state/hooks';
import { 
    selectDarkMode, 
    toggleDarkMode, 
    selectNavPoints 
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
}));

// Main page header for navigation, global state
const Header = (props: {}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();
    const darkMode = useAppSelector(selectDarkMode);
    const navPoints = useAppSelector(selectNavPoints);

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
                {navPoints.map((point) => 
                    <>
                    <RightArrowIcon />
                    <Link 
                        to={point.route}
                        className={classes.title} 
                    >
                        <Typography variant="h6">
                            {point.name}
                        </Typography>
                    </Link>
                    </>
                )}
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
            </Toolbar>
        </AppBar>
    );
}

export default Header;