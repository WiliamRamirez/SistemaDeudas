import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import * as React from 'react';

function Footer(props: any) {
    return (
        <Typography variant='body2' color='text.secondary' align='center' {...props}>
            {'Copyright © '}
            <Link color='inherit' href='#'>
                Sistema
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;
