import React from 'react';
import { 
    Link,
    RouteComponentProps,
} from 'react-router-dom';

import { 
    Button,
    Typography,
    Box,
} from '@material-ui/core';

const NotFound = (props: RouteComponentProps<{}>): JSX.Element => {
    return (
        <Box
            alignItems='center'
            display='flex'
            flexDirection='column'
        >
            <Typography variant='h3' align='center'>
                404: Not Found
            </Typography>
            <Link to='/'>
                <Button
                    variant='contained'
                    color='primary'
                    
                >
                    HOME
                </Button>
            </Link>
        </Box>
    );
}

export default NotFound;