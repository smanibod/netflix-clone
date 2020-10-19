import React, { Fragment, useState, useContext } from 'react';


import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from "../containers/footer";
import { SignForm } from '../components'
import * as ROUTES from '../constants/routes';

export default function Signup(){

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstname,setFirstname] = useState('');
    const [error,setError] = useState('');

    const isInvalid = firstname === '' || password === '' || email === '';

    const handleSignup = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstname,
                    photoURL : Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    history.push(ROUTES.BROWSE);
                })
            )
            .catch((error) => {
                setFirstname('');
                setEmail('');
                setPassword('');
                setError(error.message);

            });
    };

    return <Fragment>
        <HeaderContainer>
        <SignForm>
            <SignForm.Title>Sign Up</SignForm.Title>
            {error && <SignForm.Error>{error}</SignForm.Error>}
            <SignForm.Form onSubmit={handleSignup} method="POST">
                <SignForm.Input placeholder='First Name' value={firstname} onChange={({target}) => setFirstname(target.value)} />
                <SignForm.Input placeholder='Email' value={email} type='email' onChange={({target}) => setEmail(target.value)} />
                <SignForm.Input type='password' value={password} placeholder='Password' autoComplete='off' onChange={({ target }) => setPassword(target.value)} />
                <SignForm.Button  disabled={isInvalid} type="submit" data-testid="sign-in">Sign Up</SignForm.Button>
            </SignForm.Form>
            <SignForm.Text>Already a user? <SignForm.Link to="/sign-in">Sign in now.</SignForm.Link></SignForm.Text>
        </SignForm>
        </HeaderContainer>
        <FooterContainer />
        </Fragment>
}