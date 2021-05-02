import React from 'react';
import {Link} from 'react-router-dom';

import {
    Box,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    makeStyles,
} from '@material-ui/core';
import {
    ArrowRightAlt as InnerIcon,
} from '@material-ui/icons';

import {MobileOnly} from './helpers';
import {
    useAppSelector,
    useAppDispatch,
} from '../state/hooks';
import {
    selectMenuDrawerOpen,
    openMenuDrawer,
    closeMenuDrawer,
} from '../state/globalSlice';
import {NavMap} from '../types';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
    },
    linkText: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    inactive: {
        color: theme.palette.text.secondary,
    },
    hidden: {
        color: theme.palette.background.paper,
    },
}));

// drawer for navigation on mobile view
const MenuDrawer = (props: {
    navMap: NavMap,
}): JSX.Element => {

    const classes = useStyles();

    const dispatch = useAppDispatch();

    const open = useAppSelector(selectMenuDrawerOpen);

    const navItems: JSX.Element[] = [];

    Object.entries(props.navMap).
        forEach(([name, point], index) => {

            if (point.route) {

                navItems.push(<Link
                    to={point.route}
                    key={name}
                    className={classes.linkText}
                >
                    <ListItem>
                        <ListItemIcon>
                            <point.icon />
                        </ListItemIcon>
                        <ListItemText>
                            {name}
                        </ListItemText>
                    </ListItem>
                </Link>);

            } else if (point.children) {

                navItems.push(<ListItem
                    key={name}
                    className={classes.inactive}
                >
                    <ListItemIcon className={classes.inactive}>
                        <point.icon />
                    </ListItemIcon>
                    <ListItemText>
                        {name}
                    </ListItemText>
                </ListItem>);

                Object.entries(point.children).
                    forEach(([cName, cPoint]) => {

                        navItems.push(<Link
                            to={cPoint.route}
                            key={cName}
                            className={classes.linkText}
                        >
                            <ListItem>
                                <ListItemIcon>
                                    <InnerIcon className={classes.hidden}/>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <cPoint.icon />
                                </ListItemIcon>
                                <ListItemText>
                                    {cName}
                                </ListItemText>
                            </ListItem>
                        </Link>);

                    });

            }

            // add a divider it its not the last point
            if (index < Object.keys(props.navMap).length - 1) {

                navItems.push(<Divider key={`div${index}`} />);

            }

        });

    return (
        <MobileOnly>
            <SwipeableDrawer
                anchor='left'
                open={open}
                onOpen={() => dispatch(openMenuDrawer())}
                onClose={() => dispatch(closeMenuDrawer())}
            >
                <Box className={classes.root}>
                    <List>
                        {navItems}
                    </List>
                </Box>
            </SwipeableDrawer>
        </MobileOnly>
    );

};

export default MenuDrawer;
