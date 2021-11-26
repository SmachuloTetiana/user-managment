import { ThunkAction, ThunkDispatch } from "redux-thunk";
import Firebase, { auth } from "../../config/firebase";
import { AuthUser, SignInData, SignUpData, User } from "../../interfaces/data";
import { ADD_USER, GET_USER, REMOVE_USER, SET_ERROR, SET_USER, SIGN_OUT, UPDATE_USER } from "../types";

export const signUp = (data: SignUpData) => {
    return async (dispatch: any) => {
        try {
            const res = await auth.createUserWithEmailAndPassword(data.email, data.password);

            if (res.user) {
                const userState: AuthUser = {
                    name: data.name,
                    email: data.email
                }

                await Firebase.firestore().collection('/accounts').doc(res.user.uid).set(userState);

                dispatch ({
                    type: SET_USER,
                    payload: userState
                })
            }
        } catch (error) {
            dispatch ({
                type: SET_ERROR,
                payload: (error as Error).message
            })
        }
    }
}

export const signIn = (data: SignInData) => {
    return async (dispatch: any) => {
        try {
            await auth.signInWithEmailAndPassword(data.email, data.password);
        } catch (error) {
            dispatch ({
                type: SET_ERROR,
                payload: (error as Error).message
            })
        }
    }
}

export const getUserById = (id: string) => {
    return async (dispatch: any) => {
        try {
            const authUser = await Firebase.firestore().collection('accounts').doc(id).get();

            if (authUser.exists) {
                const userData = authUser.data() as AuthUser;

                dispatch ({
                    type: SET_USER,
                    payload: userData
                })
            }
        } catch (error) {
            dispatch ({
                type: SET_ERROR,
                payload: (error as Error).message
            })
        }
    }
}

export const signOut = () => {
    return async (dispatch: any) => {
        try {
            await auth.signOut();

            dispatch ({
                type: SIGN_OUT
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}

export const setError = (message: string) => {
    return (dispatch: any) => {
        dispatch ({
            type: SET_ERROR,
            payload: message
        })
    }
}

export const getUsers = () => {
    return async (dispatch: any) => {
        try {
            await Firebase.firestore().collection('users').get().then((snapshot: any) => {            
                const users = snapshot.docs.map((doc: any) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                dispatch ({
                    type: GET_USER,
                    payload: users
                })
            });
        } catch (error) {
            dispatch ({
                type: SET_ERROR,
                payload: (error as Error).message
            })
        }
    }
}

export const addUser = (user: User) => {
    return async (dispatch: any) => {
        try {
            await Firebase.firestore().collection('/users').doc(user.id).set(user);

            dispatch ({
                type: ADD_USER,
                payload: user
            })
        } catch (error) {
            dispatch ({
                type: SET_ERROR,
                payload: (error as Error).message
            })
        }
    }
}

export const updateUser = (user: User) => {
    return async (dispatch: any) => {
        try {
            await Firebase.firestore().collection('/users').doc(user.id).update(user);

            dispatch ({
                type: UPDATE_USER,
                payload: user
            })
        } catch (error) {
            dispatch ({
                type: SET_ERROR,
                payload: (error as Error).message
            })
        }
    }
}

export const removeUser = (id: string) => {
    return async (dispatch: any) => {
        try {
            await Firebase.firestore().collection('users').doc(id).delete();

            dispatch ({
                type: REMOVE_USER,
                payload: id
            })
        } catch (error) {
            dispatch ({
                type: SET_ERROR,
                payload: (error as Error).message
            })
        }
    }
}