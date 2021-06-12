import React from 'react';
import { Grid, Paper } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
}

function CustomBody({ children }: Props) {
    return (
        <Grid item xs={12}>
            <Paper
                style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {children}
            </Paper>
        </Grid>
    );
}

export default CustomBody;
