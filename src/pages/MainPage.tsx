import React, { useEffect } from 'react';
import { 
    RouteComponentProps,
} from 'react-router-dom';

import { 
    Button,
    ButtonGroup,
    Typography,
    Box,
    makeStyles,
} from '@material-ui/core';
import {
    Apps as AppsIcon,
    Error as ErrorIcon,
} from '@material-ui/icons';

import { useAppDispatch } from '../state/hooks';
import { setNavPoints } from '../state/globalSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
    buttons: {
        marginTop: '3rem',
    },
}));

const MainPage = (props: RouteComponentProps<{}>) => {
    
    const classes = useStyles();

    const dispatch = useAppDispatch();

    //set nav points for header
    useEffect(() => {
        dispatch(setNavPoints([]));
    }, [dispatch]);

    return (
        <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            className={classes.root}
        >
            <Typography 
                variant='h2' 
                align='center'
            >
                React-Reduxtk-Router-Mui-TS Template
            </Typography>
            <ButtonGroup
                variant='contained'
                className={classes.buttons}
            >
                {/* buttons which function as links */}
                <Button onClick={()=>props.history.push('/counter')} color='primary'>
                    <AppsIcon  />Counter App
                </Button>
                <Button onClick={()=>props.history.push('/nonexistant')} color='secondary'>
                    <ErrorIcon />Test 404 Page
                </Button>
            </ButtonGroup>
        </Box>
    );
}

export default MainPage;