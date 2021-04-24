import React, { useState } from 'react';
import { 
    RouteComponentProps,
} from 'react-router-dom';

import {
    ButtonGroup,
    Button,
    Typography,
    TextField,
    Box,
    Grid,
    makeStyles,
} from '@material-ui/core';

import { useAppSelector, useAppDispatch } from '../state/hooks';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from '../state/counterSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

// Simple counter app to demo a page connected to state slice
const Counter = (props: RouteComponentProps<{}>): JSX.Element => {

    const classes = useStyles();
    
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <Box className={classes.root}>
            <Grid 
                container 
                justify='center'
            >
                <Grid item xs={3}>
                    <Button
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </Button>
                </Grid>
                <Grid item xs={3}>
                <Typography align='center'>{count}</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Button
                        aria-label="Increment value"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </Button>
                </Grid>
            </Grid>
            <TextField
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <ButtonGroup variant='contained'>
                <Button
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </Button>
                <Button
                    onClick={() => dispatch(incrementAsync(incrementValue))}
                >
                    Add Async
                </Button>
                <Button
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </Button>
            </ButtonGroup>
        </Box>
    );
}

export default Counter;
