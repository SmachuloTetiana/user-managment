import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './Input.style';

interface InputProps {
    label: string;
    name: string;
    type: string;
    value: string;
    className?: string;
    handleInput: (string: any) => void
}

const InputComponent: FC<InputProps> = ({ label, name, type, value, className, handleInput }) => {
    const classes = useStyles();

    return (
        <TextField
            fullWidth
            name={name}
            type={type}
            value={value}
            onChange={(event) => handleInput(event.target.value)}
            className={clsx(classes.input, className)}
            label={label}
            variant="outlined"
            placeholder={label}
            autoComplete="off"
            required
            />
    )
}

export default InputComponent;