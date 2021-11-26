import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { Box, Button, Container, Typography } from '@material-ui/core';

import InputComponent from '../../components/input/Input';
import AlertComponent from '../../components/alert/Alert';

import useStyles from './SignUp.style';

import { signUp } from '../../store/actions/auth';
import { RootState } from '../../store';

const SignUp: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const error = useSelector((state: RootState) => state.auth.error);

    const handleSignUp = () => {
        dispatch(signUp({ name, email, password }));
    }

    return (
        <Container className={classes.container}>
            <Box display="flex" flexDirection="column" className={classes.signUpForm}>
                <Typography component="h3" align="center" className={classes.title}>Sign Up</Typography>

                {
                    error && <AlertComponent severity="error" text={error} />
                }

                <InputComponent
                    label="Name"
                    type="text"
                    name="userName"
                    value={name}
                    handleInput={setName} />

                <InputComponent
                    label="E-mail"
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

                <Button
                    fullWidth
                    variant="contained"
                    className={classes.signUpBtn}
                    onClick={handleSignUp}>Sign Up</Button>
            
                <Box mt={2} display="flex" justifyContent="center">
                    <Typography component="span" className={classes.text}>Already have an account?</Typography>
                    <Link to="/login" className={clsx(classes.link, classes.text)}>Sign in</Link>
                </Box>
            </Box>
        </Container>
    )
};

export default SignUp;