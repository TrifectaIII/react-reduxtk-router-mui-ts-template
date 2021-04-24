import React from 'react';
import { 
    RouteComponentProps,
} from 'react-router-dom';

import { 
    Button,
    ButtonGroup,
    Typography,
    Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    ArrowBack as BackIcon,
    Home as HomeIcon,
} from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        marginTop: '3em',
    },
    buttons: {
        marginTop: '3rem',
    },
});

// 404 not found error page
const NotFound = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();

    return (
        <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
            className={classes.root}
        >
            <Typography variant='h3' align='center'>
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

export default NotFound;