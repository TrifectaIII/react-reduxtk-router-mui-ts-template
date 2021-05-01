import React from 'react';

import {
    Box,
    SwipeableDrawer,
    makeStyles,
} from '@material-ui/core';

import {MobileOnly} from './helpers';
import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectNavDrawerOpen,
    openNavDrawer,
    closeNavDrawer,
} from '../state/globalSlice';

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

// drawer for navigation on mobile view
const NavDrawer = (props: {
    navMap: NavMap,
}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();

    const open = useAppSelector(selectNavDrawerOpen);

    return (
        <MobileOnly>
            <SwipeableDrawer
                anchor='left'
                open={open}
                onOpen={() => dispatch(openNavDrawer())}
                onClose={() => dispatch(closeNavDrawer())}
            >
                <Box className={classes.root}>
                Template Component
                </Box>
            </SwipeableDrawer>
        </MobileOnly>
    );

};

export default NavDrawer;
