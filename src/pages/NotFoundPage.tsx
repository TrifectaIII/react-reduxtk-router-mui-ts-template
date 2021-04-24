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
    ArrowBack as BackIcon,
    Home as HomeIcon,
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

// 404 not found error page
const NotFoundPage = (props: RouteComponentProps<{}>): JSX.Element => {

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
            <Typography variant='h1' align='center'>
                404: Not Found
            </Typography>
            <ButtonGroup 
                variant='contained'
                className={classes.buttons}
            >
                {/* buttons which function as links */}
                <Button onClick={props.history.goBack} color='secondary'>
                    <BackIcon /> Back
                </Button>
                <Button onClick={()=>props.history.push('/')} color='primary'>
                    <HomeIcon /> Home
                </Button>
            </ButtonGroup>
            
        </Box>
    );
}

export default NotFoundPage;