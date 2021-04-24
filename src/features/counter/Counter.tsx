import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
    ButtonGroup,
    Button,
    Typography,
    TextField,
    Box,
} 
from '@material-ui/core';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    incrementIfOdd,
    selectCount,
} from './counterSlice';

export function Counter() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <Box>
            <Typography>
                <Link to='/alternate'>
                    Other Page
                </Link>
            </Typography>
            <Box>
                <Button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </Button>
                <Typography>{count}</Typography>
                <Button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </Button>
            </Box>
            <Box>
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
        </Box>
    );
}
