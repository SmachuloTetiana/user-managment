import React, { FC } from 'react';
import { Avatar, Box, Button, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './Header.style';

import { signOut } from '../../store/actions/auth';
import { RootState } from '../../store';


const Header: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const authUser = useSelector((state: RootState) => state.auth.user);

    const handleSignOut = () => {
        dispatch(signOut())
    }

    return (
        <Box display="flex" alignItems="center" flexDirection="row" justifyContent="flex-end">
            <Box display="flex" flexDirection="row" alignItems="center">
                <Avatar></Avatar>
                <Typography component="span" className={classes.name}>{authUser && authUser.name}</Typography>
            </Box>
            <Button variant="contained" onClick={handleSignOut} className={classes.signOutBtn}>
                Signout
            </Button>
        </Box>
    )
}

export default Header;