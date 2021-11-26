import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { Box, Button, Container, Typography } from '@material-ui/core';

import AlertComponent from '../../components/alert/Alert';
import InputComponent from '../../components/input/Input';

import useStyles from './SignIn.style';

import { RootState } from '../../store';
import { signIn } from '../../store/actions/auth';

const SignIn: FC = () => {
    const classes = useStyles();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const error = useSelector((state: RootState) => state.auth.error);
    const dispatch = useDispatch();

    const handleSignIn = () => {
        dispatch(signIn({ email, password }))
    }

    return (
        <Container className={classes.container}>
            <Box display="flex" flexDirection="column" className={classes.signInForm}>
                <Typography component="h3" className={classes.title} align="center">Sign In</Typography>

                {
                    error && <AlertComponent severity="error" text={error} />
                }

                <InputComponent
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    handleInput={setEmail} />

                <InputComponent
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    handleInput={setPassword} />

                <Button fullWidth variant="contained" onClick={handleSignIn} className={clsx(classes.signInBtn, "signIn-btn")}>Sign In</Button>
            </Box>
        </Container>
    )
};

export default SignIn;