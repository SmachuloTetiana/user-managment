import React, { FC, useEffect, useState } from 'react';
import  { Redirect } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './pages/signUp/SignUp';
import SignIn from './pages/signIn/SignIn';
import Profile from './pages/profile/Profile';
import { auth } from './config/firebase';
import { useDispatch } from 'react-redux';
import { getUserById } from './store/actions/auth';

const App: FC = () => {
  const dispatch = useDispatch();
  const [authUser, setAuthUser] = useState<any>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUserById(user.uid));
        setAuthUser(user);
      } else {
        setAuthUser(null)
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => ( !authUser ? <SignUp /> : <Redirect to='/profile' /> )} />
        <Route exact path="/login" render={() => ( !authUser ? <SignIn /> : <Redirect to='/profile' /> )} />
        <Route exact path="/profile" render={() => ( authUser ? <Profile /> : <Redirect to='/login' /> )} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
