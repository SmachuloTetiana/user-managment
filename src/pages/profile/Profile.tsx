import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Edit, Delete, Close } from '@material-ui/icons';
import { Box, Container, TableContainer, Table, TableHead, Typography, TableRow, TableCell, TableBody, IconButton, Modal, Button, TextField } from '@material-ui/core';

import Header from '../../components/header/Header';
import AlertComponent from '../../components/alert/Alert';
import InputComponent from '../../components/input/Input';

import useStyles from './Profile.style';

import { addUser, getUsers, removeUser, setError, updateUser } from '../../store/actions/auth';
import { RootState } from '../../store';
import { User } from '../../interfaces/data';

const ProfilePage: FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.auth.users);
    const error = useSelector((state: RootState) => state.auth.error);
    const [open, setOpen] = useState<boolean>(false);
    const [edit, setEdit] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [updateState, setUpdateState] = useState<User>({} as User);

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const handleAddUser = () => {
        if (!firstName || !lastName || !email) {
            dispatch(setError('Please complete all required fields.'));
            return;
        }

        const newUser = {
            id: new Date().getTime().toString(),
            firstName,
            lastName,
            email
        }

        dispatch(setError(''));
        dispatch(addUser(newUser));
        setOpen(false);
        clearData();
    }

    const handleRemoveUser = (id: string) => {
        dispatch(removeUser(id))
    }

    const handleEditUser = (data: User) => {
        const { firstName, lastName, email } = data;

        setUpdateState(data);
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
    }

    const handleUpdateUser = () => {
        dispatch(updateUser({ firstName, lastName, email, id: updateState && updateState.id }));
        setOpen(false);
        setEdit(false);
    }

    function clearData() {
        setFirstName('');
        setLastName('');
        setEmail('');
        setUpdateState({} as User);
    }

    return (
    <Container>
        <Header />

        <Box display="flex" justifyContent="flex-end" mt={4} mb={2}>
            <Button variant="contained" onClick={() => setOpen(true)} className={classes.btnStyles}>
                Add User
            </Button>
        </Box>

        <TableContainer>
            <Table>
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.length ? users.map((user: any) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.firstName}</TableCell>
                                <TableCell>{user.lastName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell align="right">
                                    <IconButton aria-label="edit" size="small" onClick={() => {setOpen(true); setEdit(true); handleEditUser(user)}}><Edit /></IconButton>
                                    <IconButton aria-label="delete" size="small" onClick={() => handleRemoveUser(user.id)}><Delete /></IconButton>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan={6} className={classes.tableCell}>
                                    There are no users yet.
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>

        <Modal
            open={open}
            className={classes.modal}
            onClose={() => { setOpen(false); clearData(); setEdit(false) }}
            aria-labelledby="modal-with-user">
            <Box className={classes.modal_Box}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={3}>
                    <Typography component="h5" align="center" className={classes.modal_Title}>{edit ? 'Edit' : 'Add'} User</Typography>
                    <IconButton className={classes.closeBtn} aria-label="close modal" size="medium" onClick={() => { setOpen(false); clearData(); setEdit(false) }}><Close /></IconButton>
                </Box>

                {
                    error && <AlertComponent severity="error" text={error} />
                }

                <InputComponent
                    label="First name"
                    type="firstName"
                    name="firstName"
                    value={firstName}
                    handleInput={setFirstName} />
                
                <InputComponent
                    label="Last name"
                    type="lastName"
                    name="lastName"
                    value={lastName}
                    handleInput={setLastName} />
                
                <InputComponent
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    handleInput={setEmail} />
                
                <Button fullWidth variant="contained" onClick={edit ? handleUpdateUser : handleAddUser} className={classes.modal_Btn}>{edit ? 'Edit user' : 'Add user'}</Button>             
            </Box>
        </Modal>
    </Container>
    )
};

export default ProfilePage;