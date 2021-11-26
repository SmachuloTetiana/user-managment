export interface AuthUser {
    name?: string;
    email: string;
    password?: string;
}

export interface User {
    id: string | undefined;
    firstName: string;
    lastName: string;
    email: string;
}

export interface AuthState {
    user: AuthUser | null;
    users: Array<User>;
    error: string;
}

export interface SignUpData {
    name: string;
    email: string;
    password: string;
}

export interface SignInData {
    email: string;
    password: string;
}