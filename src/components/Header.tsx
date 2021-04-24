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
} from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        margin:'0',
    }
});

const Header = (props: {

}): JSX.Element => {

    const classes = useStyles();

    return (
        <AppBar
            position='static'
            className={classes.root}
        >
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;