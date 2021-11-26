import React from 'react';
import { ADD_USER, GET_USER, SET_ERROR, SET_USER, SIGN_OUT } from '../types';
import authReducer, { initialState } from './authReducer';

describe('user reducer', () => {
    test('should set user', () => {
        const action = {
            type: SET_USER,
            payload: {
                name: 'user',
                email: 'user@as.as',
                password: 'user123'
            }
        };

        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            user: action.payload
        });
    });

    test('should return error', () => {
        const action = {
            type: SET_ERROR,
            payload: 'Test error message.'
        };

        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            error: action.payload
        });
    });    

    test('should sign out user', () => {
        const action = {
            type: SIGN_OUT
        };

        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            user: null
        });
    });    

    test('should return get users', () => {
        const action = {
            type: GET_USER,
            payload: [1, 2]
        };

        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            users: action.payload
        });
    });    

    test('should add user', () => {
        const newUser = {                
            firstName: 'user',
            lastName: '1',
            email: 'user1@mail.co',
            image: null
        };

        const action = {
            type: ADD_USER,
            payload: newUser
        };

        expect(authReducer(initialState, action)).toEqual({
            ...initialState,
            users: [...initialState.users, action.payload]
        });
    });
})