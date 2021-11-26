import React, { FC } from 'react';
import { Alert } from '@material-ui/lab';

import useStyles from './Alert.style';

interface AlertProps {
    severity: any;
    text: string;
}

const AlertComponent: FC<AlertProps> = ({ severity, text }) => {
    const classes = useStyles();
    return (
        <Alert severity={severity} className={classes.error}>{text}</Alert>
    )
}

export default AlertComponent;