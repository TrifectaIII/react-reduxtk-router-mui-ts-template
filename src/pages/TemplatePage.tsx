import React, { useEffect } from 'react';
import { 
    RouteComponentProps,
} from 'react-router-dom';

import { 
    Box,
    makeStyles,
} from '@material-ui/core';

import { useAppDispatch } from '../state/hooks';
import { setNavPoints } from '../state/globalSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '3rem',
    },
}));

// An empty template page component
const TemplatePage = (props: RouteComponentProps<{}>): JSX.Element => {
        
    const classes = useStyles();

    const dispatch = useAppDispatch();

    //set nav points for header
    useEffect(() => {
        dispatch(setNavPoints([
            {
                name: 'Template',
                route: '/template',
            }
        ]));
    }, [dispatch]);

    return (
        <Box 
            className={classes.root}
        >
            Template Page
        </Box>
    )
}

export default TemplatePage;